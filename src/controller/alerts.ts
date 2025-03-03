import Alert from '../models/alerts';
import { Request, Response } from 'express';

exports.createAlert = async (req: Request, res: Response) => {
    try {
        const alert = new Alert(req.body);
        await alert.save();
        res.status(201).json(alert);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
}

exports.updateAlert = async (req: Request, res: Response) => {
    try {
        const alert = await Alert.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!alert) {
            return res.status(404).json({ error: 'Alert not found' });
        }
        res.status(200).json(alert);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
}

exports.getAlert = async (req: Request, res: Response) => {
    try {
        const alert = await Alert.findById(req.params.id);
        if (!alert) {
            return res.status(404).json({ error: 'Alert not found' });
        }
        res.status(200).json(alert);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
}

exports.getAlerts = async (req: Request, res: Response) => {
    try {
        const alerts = await Alert.find();
        res.status(200).json(alerts);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
}

exports.removeAlert = async (req: Request, res: Response) => {
    try {
        const alert = await Alert.findByIdAndDelete(req.params.id);
        if (!alert) {
            return res.status(404).json({ error: 'Alert not found' });
        }
        res.status(200).json({ message: 'Alert removed' });
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
}
