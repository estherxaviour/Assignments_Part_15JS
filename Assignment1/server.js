/* Assignment1
Create a basic socket.io app  and print the current date and time in interval of 15 seconds.*/
var http = require('http'),
    fs = require('fs'),
    index = fs.readFileSync(__dirname + '/index.html');

// Send index.html to all requests
var app = http.createServer(function(req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
});

// Socket.io server listens to our app
var io = require('socket.io').listen(app);

// Send current time to all connected clients
function sendTime() {
    io.sockets.emit('time', { time: new Date().toJSON() });
}

// Send current time every 15 secs
setInterval(sendTime, 15000);


app.listen(3000, function(){
	console.log("App is runing on port Number 3000"); 
	});
