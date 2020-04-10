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
  // get chat data and add to database
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
  // real time listener for changes in the database
  getChats(callback){
    this.chats
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type === 'added'){
            // update the ui
            callback(change.doc.data())
          }
        })
      });
  }
}

const chatroom = new Chatroom('gaming','shaun');

chatroom .getChats((data) => {
  console.log(data);
});