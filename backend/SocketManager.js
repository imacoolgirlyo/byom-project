const io = require('./index.js').io 

module.exports = function(socket){
    console.log('Socket.id '+ socket.id );
    // MongoDB에 nickname이 있는지 체크
    socket.on("VERIFY_USER", nickname =>{
		if(isUser(connectedUsers, nickname)){
			callback({ isUser:true, user:null })
		}else{
			callback({ isUser:false, user:createUser({name:nickname})})
		}
    })
    
    // socket.on('USER_CONNECTED', user => {
    //     console.log('After Verfiying User, Adding User, User is Connected');
    //     connectedUsers = addUser(connectedUsers, user);
    //     socket.user = user;

    //     console.log(connectedUsers);
    // })
}

// function addUser(userList, user){
//     let newList = Object.assign({}, userList)
//     newList[user.name] = user
//     return newList
// }

// function removeUser(userList, username){
//     let newList = Object.assign({}, userList)
//     delete newList[username]
//     return newList
// }

// function isUser(userList, username){
//     return username in userList
// }

// Sender, Music, Artist 받고 -> broadcast로 보내주기 
// Manager like 받아서, now playing으로 보내기 

// isUser : nickname 존재하는지 확인 
// createUser : mongodb에 저장