// what needs to be done
// add new chat documents
// set up a real-time listener to get new chats
// update the username
// update the room


// set up the Chatroom class
class Chatroom {
  constructor(room, username){
    this.room = room;
    this.username = username;
    this.chats = db.collection('chats');
  }
  async addChat(message){
    // format a chat object
    const now = new Date();
    const chat = {
      message: message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now)
    };
    // save the chat document
    const response = await this.chats.add(chat)
    return response;
  }
}

const chatroom = new Chatroom('gaming','shaun');
console.log(chatroom);
chatroom.addChat('hello everyone')
.then(() => {
  console.log('chat added');
})
.catch(err=> {
  console.log(err,'chat intercepted, missing in action');
})