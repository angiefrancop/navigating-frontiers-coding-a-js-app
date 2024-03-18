import http from 'http';
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.write('Hello Word from Node HTTP 🦍. This is my test http');
  res.end();
});

server.listen(PORT, () => {
  console.log(`Node HTTP server running at http://localhost:${PORT} 🚀`);
});
