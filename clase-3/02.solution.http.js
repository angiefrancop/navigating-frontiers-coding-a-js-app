import http from 'http';

const PORT = 3000;

let counterA = 0;
let counterB = 0;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/counterA') {
    const resBody = { counterA };

    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(resBody));
  }

  if (req.method === 'GET' && req.url === '/counterB') {
    const resBody = { counterB };

    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(resBody));
  }

  if (req.method === 'POST' && req.url === '/counterA') {
    counterA++; // Incrementar counterA
    const resBody = { counterA };

    // Establecer el encabezado de la respuesta y enviar la respuesta
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(resBody));
  }

  // Manejar solicitudes POST para /counterB
  if (req.method === 'POST' && req.url === '/counterB') {
    counterB++; // Incrementar counterB
    const resBody = { counterB };

    // Establecer el encabezado de la respuesta y enviar la respuesta
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(resBody));
  }
});

server.listen(PORT, () => {
  console.log(`Node HTTP server running at http://localhost:${PORT} 🚀`);
});
