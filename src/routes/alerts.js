import { create } from 'domain';
import { Router } from 'express';
const router = Router();

import { createAlert } from '../controllers/alerts';


router.get('/get', getAlerts);
router.get('/get/:id', getAlert);
router.post('/create', createAlert);
router.put('/update/:id', updateAlert);
router.delete('/delete/:id', deleteAlert);

export default router;
