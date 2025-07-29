import { processArray } from '../utils/helpers.js';
import dotenv from "dotenv"

dotenv.config();

export const processBfhlData = (req, res) => {
    try {
        const { data } = req.body;

        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                message: "Invalid input field . data must be an array"
            });
        }

        const processedData = processArray(data);

        const userId = process.env.USER_ID || "yourname_01012024";
        const email = process.env.EMAIL || "youremail@example.com";
        const rollNumber = process.env.ROLL_NUMBER || "your_roll_number";

        const response = {
            is_success: true,
            user_id: userId,
            email: email,
            roll_number: rollNumber,
            ...processedData
        };
        
        console.log('Environment variables:', {
            USER_ID: process.env.USER_ID,
            EMAIL: process.env.EMAIL,
            ROLL_NUMBER: process.env.ROLL_NUMBER
        });
        console.log('Response:', response);

        res.status(200).json(response);

    } catch (error) {
        console.error('Error processing request in controller:', error);
        res.status(500).json({
            is_success: false,
            message: "Internal server error"
        });
    }
};
