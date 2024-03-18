import express from 'express';

const app = express();
const PORT = 3000;

let counterA = 2;
let counterB = 2;

app.get('/counterA', (req, res) => {
  const resBody = { counterA };
  res.status(200).json(resBody);
});

app.get('/counterB', (req, res) => {
  const resBody = { counterB };
  res.status(200).json(resBody);
});

app.post('/counterA', (req, res) => {
  counterA++;
  const resBody = { counterA };
  res.status(200).json(resBody);
});

app.post('/counterB', (req, res) => {
  counterB++;
  const resBody = { counterB };
  res.status(200).json(resBody);
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT} 🚀`);
});
