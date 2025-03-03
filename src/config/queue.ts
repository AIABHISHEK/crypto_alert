// src/config/queue.js
import { Queue } from 'bullmq';
import redis from './redis';

const alertQueue = new Queue('alertQueue', { connection: redis });

export default alertQueue;
