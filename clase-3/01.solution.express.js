import express from 'express';

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  res.status(400);
  res.send('Hello Word from Express');
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT} 🚀`);
});
