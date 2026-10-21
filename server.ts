import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'kefir-vital-monteria', timestamp: new Date().toISOString() });
});

// Production static file serving
const distPath = path.resolve(__dirname, 'dist');

if (fs.existsSync(distPath)) {
  console.log(`Serving static files from ${distPath}`);
  app.use(express.static(distPath, {
    index: 'index.html',
    maxAge: '1h',
  }));

  // SPA fallback: any route not matching a file returns index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
} else {
  console.warn(`Warning: ${distPath} does not exist. Please run 'npm run build'.`);
  app.get('*', (req, res) => {
    res.status(200).send(`
      <!doctype html>
      <html lang="es">
        <head><title>Kéfir Vital Montería</title></head>
        <body style="font-family: system-ui, sans-serif; text-align: center; padding: 50px;">
          <h2>Kéfir Vital Montería</h2>
          <p>Compilación en progreso. Ejecuta <code>npm run build</code> para generar los archivos estáticos.</p>
        </body>
      </html>
    `);
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Production server listening on http://0.0.0.0:${PORT}`);
});

