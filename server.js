const express = require('express');
const socket = require('socket.io');

let app = express();
let server = app.listen(3000);

app.use(express.static('public'));

console.log('My socket server is running');

let io = socket(server);

io.sockets.on('connection', newConnection);

let songs = [{
        id: 'song-1',
        title: 'title 1',
        artist: 'artist 1'
    },
    {
        id: 'song-2',
        title: 'title 2',
        artist: 'artist 2'
    },
    {
        id: 'song-3',
        title: 'title 3',
        artist: 'artist 3'
    },
    {
        id: 'song-4',
        title: 'title 4',
        artist: 'artist 4'
    },
    {
        id: 'song-5',
        title: 'title 5',
        artist: 'artist 5'
    },
    {
        id: 'song-6',
        title: 'title 6',
        artist: 'artist 6'
    },
    {
        id: 'song-7',
        title: 'title 7',
        artist: 'artist 7'
    },
    {
        id: 'song-8',
        title: 'title 8',
        artist: 'artist 8'
    },
    {
        id: 'song-9',
        title: 'title 9',
        artist: 'artist 9'
    },
]

function newConnection(socket) {
    console.log('New connection: ' + socket.id);

    socket.emit('songsList', songs);

    socket.on('songSelected', function(data){
    	socket.broadcast.emit('songSelected', data);
    });

    // socket.on('test', testMsg);

    // function testMsg(data) {
    //     // io.sockets.emit('test', data);
    //     socket.broadcast.emit('test', data);
    //     console.log(data);
    // }

}