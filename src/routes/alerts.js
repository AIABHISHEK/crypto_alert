import { create } from 'domain';
import { Router } from 'express';
const router = Router();

import { createAlert } from '../controllers/alerts';


/**
 * POST /alerts
 * Expected JSON body: { userId, symbol, priceThreshold, condition }
 * Saves the alert in MongoDB.
 */
router.get('/get', getAlerts);
router.get('/get/:id', getAlert);
router.post('/create', createAlert);
router.put('/update/:id', updateAlert);
router.delete('/delete/:id', deleteAlert);

export default router;
