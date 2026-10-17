import express from 'express';
import type { HealthResponse } from '@jw-app/shared';

const app = express();
const port = Number(process.env.PORT ?? 3001);
if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('PORT must be a valid TCP port.');
app.disable('x-powered-by');
app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'jw-app-server' } satisfies HealthResponse);
});
const server = app.listen(port, '127.0.0.1', () => console.log(`JW-App API: http://127.0.0.1:${port}/api/health`));
server.on('error', error => { console.error(error); process.exitCode = 1; });
for (const signal of ['SIGINT', 'SIGTERM'] as const) process.on(signal, () => server.close());
