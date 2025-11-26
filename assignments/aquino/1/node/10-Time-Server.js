/*This is an example of establishign a TCP connection and obtaining the time*/

const net = require('net');
function zeroFill(i){
    return (i < 10 ? '0' : '') + i;
}
function now(){
    var time = new Date();
    return time.getFullYear() + '-' + zeroFill(time.getMonth() + 1) + '-' + zeroFill(time.getDate()) + ' ' + zeroFill(time.getHours()) + ":" + zeroFill(time.getMinutes());
}
const server = net.createServer(function (socket){
    socket.end(now() + '\n');
});
server.listen(Number(process.argv[2]));