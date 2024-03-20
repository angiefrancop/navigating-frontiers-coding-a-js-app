/**
 * Tarea A:

  Usando Node.js HTTP:

  1. Crear un endpoint que permita obtener la lista completa de elementos de una lista de mercado utilizando Node.js HTTP.
  2. Crear un endpoint que permita agregar un nuevo elemento a una lista de mercado utilizando Node.js HTTP, validando si el elemento ya existe y devolviendo un mensaje de error con código de estado de conflicto en caso afirmativo.
 */

import http, { request } from 'http';

const PORT = 3000;

let marketList = [
  {
    name: 'huevos',
    count: 1,
    price: 1000
  },
  {
    name: 'pan',
    count: 1,
    price: 5000
  }
];

const server = http.createServer((req, res) => {
  let reqBody = '';
  req.on('data', (chunk) => {
    reqBody += chunk;
  });
  req.on('end', () => {
    if (req.method === 'GET' && req.url === '/market/list-item') {
      const resBody = marketList;
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.end(JSON.stringify(resBody));
    }

    if (req.method === 'POST' && req.url === '/market/add-item') {
      const item = JSON.parse(reqBody);
      if (validateItem(item)) {
        res.writeHead(409, {
          'Content-Type': 'application/json'
        });
        res.end('The item already exists in the market list');
      } else {
        marketList.push(item);
        res.writeHead(200, {
          'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(marketList));
      }
    }
  });
});

const validateItem = (item) => {
  const found = marketList.find((element) => element.name === item.name);
  return !!found;
};

server.listen(PORT, () => {
  console.log(`Node HTTP server running at http://localhost:${PORT} 🚀`);
});
