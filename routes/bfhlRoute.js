import { processBfhlData } from '../controllers/bfhlController.js';
import express from 'express';
const router = express.Router();

router.post('/bfhl', processBfhlData);

export default router; 