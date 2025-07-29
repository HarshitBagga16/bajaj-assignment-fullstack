import express from 'express';
import dotenv from 'dotenv';
import bfhlRoute from './routes/bfhlRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use('/',bfhlRoute);

app.get('/', (req, res) => {
    res.send("Bajaj Assignment API is running!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`API endpoint: http://localhost:${PORT}/bfhl`);
}); 