const express = require('express');
const app = express();
const morgan= require('morgan');
const cors = require('cors');
var server = require('http').createServer()
var io = module.exports.io = require('socket.io')(server)

app.use(morgan("dev"));
app.use(cors());
const PORT = process.env.PORT || 3231

const SocketManager = require('./SocketManager')

const playlist = [
    {
        "sender" : "imacoolgirlyo",
        "artist" : "Peggy Gou",
        "title" : "Starry Night"
    },
    {
        "sender" : "RR",
        "artist" : "Pulp",
        "title" : "Common People"
    },
    {
        "sender" : "Candy",
        "artist" : "백예린",
        "title" : "야간비행"
    }
]

io.on('connection', SocketManager)

app.get('/playlist', function(req, res){
    res.send(playlist);
})
app.listen(PORT , ()=> {
    console.log("Connected to port : "+ PORT);
})

