function sendMessage() {
  const messageInput = document.getElementById('messageInput');
  const message = messageInput.value.trim();
  if (message) {
    appendMessage('You', message);
    messageInput.value = '';
  }
}

function appendMessage(username, message) {
  const messageList = document.getElementById('messageList');
  const listItem = document.createElement('li');
  listItem.innerHTML = `<span>${username}:</span> ${message}`;
  messageList.appendChild(listItem);
}
