const io = require('./index.js').io,
  db = require('./db'),
  Music = require('./models/Music'),
  User = require('./models/User');


module.exports = function(socket){
    console.log('Socket.id '+ socket.id );
    // MongoDB에 nickname이 있는지 체크
    socket.on("VERIFY_USER", (user, callback) => {
        User.findOne({nickname : user})
        .then( data => data=== null ? callback(user, true) : callback(user, false));
        // connectedUsers = addUser(connectedUsers, user);
        // socket.user = user;
    
    });
    
    socket.on('NICKNAME_SAVED', (nickname, callback) => {
      User.create({nickname})
        .then( data => {
          console.log('nickname is saved safely');
          callback(data);
        }).catch( err => console.error(err));
      
        console.log("User is Connected" + nickname);
    })

    socket.on('new music', data => {
      // database에 저장 , broadcast 보내기
      const { sender, artist, title, isPlayed, isPlaying } = data;
      console.log(`SERVER GET : sender : ${sender}, artist : ${artist}, title : ${title}, isPlayed: ${isPlayed}`);
      // id 까지 보내줘야함 
      Music.create({
        sender,
        artist,
        title,
        isPlayed,
        isPlaying
      }).then((data) => {
        io.emit('new notification', data);
      })
    })

    socket.on('selected by DJ', function(_id, callback){
      console.log(_id);
      Music.findByIdAndUpdate({ _id: _id }, {selected : true}, {new : true})
      .then((data) => {
        io.emit('music is selected', data);
      } )
    })

    socket.on('remove check', _id => {
      Music.findByIdAndUpdate({_id : _id}, {selected : false}, {new : true})
      .then((data) => {
        io.emit('check is removed', data);
      })
    })
}