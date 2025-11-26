const net = require('net');

const port = process.argv[2];

function getCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); 
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

const server = net.createServer((socket) => {
  const dateTime = getCurrentDateTime();
  socket.end(dateTime + '\n'); 
});

server.listen(port, () => {
  console.log(`Time server running on port ${port}`);
});