import WebSocket from 'ws';
import redis from '../config/redis';
import alertQueue from '../config/queue';

const WEBSOCKET_URL = process.env.WEBSOCKET_URL || 'wss://stream.binance.com:9443/ws/btcusdt@ticker';

function startPriceFetcher() {
  const ws = new WebSocket(WEBSOCKET_URL);

  ws.on('open', () => {
    console.log('Connected to price WebSocket');
  });

  ws.on('message', async (data) => {
    const priceData = JSON.parse(data);
    const latestPrice = parseFloat(priceData.c);
    const symbol = 'BTCUSDT'; // Hardcoded for this example

    // Update Redis with the latest price (expires in 60 seconds)
    await redis.set(symbol, latestPrice, 'EX', 300);

    // Enqueue a job for the Alert Processor
    await alertQueue.add('check-alerts', { symbol, price: latestPrice });
  });

  ws.on('error', (err) => {
    console.error('WebSocket error:', err);
  });
}

module.exports = startPriceFetcher;
