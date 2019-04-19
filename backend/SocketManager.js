const io = require('./index.js').io,
  db = require('./db'),
  Music = require('./models/Music');


module.exports = function(socket){
    console.log('Socket.id '+ socket.id );
    // MongoDB에 nickname이 있는지 체크
    socket.on("VERIFY_USER", function(nickname, callback){
      callback(nickname)
    }
		// if(isUser(connectedUsers, nickname)){
		// 	callback({ isUser:true, user:null })
		// }else{
		// 	callback({ isUser:false, user:createUser({name:nickname})})
		// }
    )
    
    socket.on('USER_CONNECTED', user => {
        console.log('After Verfiying User, Adding User, User is Connected');
        // connectedUsers = addUser(connectedUsers, user);
        // socket.user = user;

        console.log("User is Connected" + user);
    })

    socket.on('new music', data => {
      // database에 저장 , broadcast 보내기
      const { sender, artist, title, selected } = data;
      console.log(`SERVER GET : sender : ${sender}, artist : ${artist}, title : ${title}, selected: ${selected}`);
      // id 까지 보내줘야함 
      Music.create({
        sender,
        artist,
        title,
        selected
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