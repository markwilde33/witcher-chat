// dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');

// add a new chat
newChatForm.addEventListener('submit', e => {
  e.preventDefault();
  const message = newChatForm.message.value.trim();
  // update message via chatroom Class
  chatroom.addChat(message)
    //reset the form when promise is resolved
    .then(() => newChatForm.reset())
    .catch(err => console.log(err));
});

// update username
newNameForm.addEventListener('submit', e => {
  e.preventDefault();
  // update name via chatroom Class
  const newName = newNameForm.name.value.trim();
  chatroom.updateName(newName)
    //reset the form 
     newNameForm.reset();
});

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('gaming', 'shaun');

// get chats & render
chatroom.getChats(data => chatUI.render(data));
