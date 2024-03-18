/**
 * Tarea B:

  Usando Express.js:

  1. Crear un endpoint que permita obtener la lista completa de elementos de una lista de mercado utilizando Node.js HTTP.
  2. Crear un endpoint que permita agregar un nuevo elemento a una lista de mercado utilizando Node.js HTTP, validando si el elemento ya existe y devolviendo un mensaje de error con código de estado de conflicto en caso afirmativo.
 */

import express from 'express';
const PORT = 3000;
const app = express();

let marketList = [
  {
    name: 'Leche',
    count: 1,
    price: 1000
  },
  {
    name: 'Pan',
    count: 1,
    price: 5000
  }
];

app.use(express.json());

app.get('/market-list', (req, res) => {
  const resBody = marketList;
  res.status(200).json(resBody);
});

app.post('/add-item', (req, res) => {
  const item = req.body;
  if (validateItem(item)) {
    res.status(409).json('The item already exists in the market list');
  } else {
    marketList.push(item);
    res.status(200).json(marketList);
  }
});

const validateItem = (item) => {
  const found = marketList.find((element) => element.name === item.name);
  return !!found;
};

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT} 🚀`);
});
