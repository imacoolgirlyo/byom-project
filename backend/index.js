const express = require('express');
const db = require('./db');
const app = express();
const morgan= require('morgan');
const cors = require('cors');
var server = require('http').createServer(app)
var io = module.exports.io = require('socket.io')(server)

const Music = require('./models/Music');
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
const list = {
    "result" : [
        {
            "id" : 1,
            "title_ko" : "서울 재즈 페스티벌"
        },
        {
            "id" : 2,
            "title_ko" : "그린 플러그드 페스티벌"
        },
        {
            "id" : 3,
            "title_ko" : "울트라 뮤직 페스티벌"
        },
        {
            "id" : 4,
            "title_ko" : "뷰티풀 민트 라이프"
        },
        {
            "id" : 5,
            "title_ko" : "지니 뮤직 페스티벌"
        },
        {
            "id" : 6,
            "title_ko" : "월드 디제이 페스티벌"
        }
    ]
}


io.on('connection', SocketManager)

server.listen(PORT , ()=> {
    console.log("Connected to port : "+ PORT);
})

app.get('/playlist', function(req, res){
    //  res.send(playlist);
    Music.find()
    .then(musics => res.send(musics))
    .catch(err => console.error(err));
})

app.get('/festival', function(req, res){
    res.send(list);
})
