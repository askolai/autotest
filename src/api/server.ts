import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// POST /api/analyze - Accepts a URL and returns a stub response
app.post('/api/analyze', (req: Request, res: Response) => {
  const { url } = req.body;
  if (!url) {
    res.status(400).json({ error: 'URL is required' });
    return;
  }
  // TODO: Trigger analysis pipeline
  res.json({ message: `Analysis started for ${url}` });
});

// GET /api/results - Returns stub test results
app.get('/api/results', (req: Request, res: Response) => {
  // TODO: Fetch real results from SQLite
  res.json({ results: [] });
});

// GET /api/status - Health check
app.get('/api/status', (req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
}); 