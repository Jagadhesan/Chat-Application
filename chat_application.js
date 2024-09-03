document.getElementById('message').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const messageInput = document.getElementById('message');
    const message = messageInput.value.trim();
    const username = document.getElementById('username').value.trim();

    if (message !== '' && username !== '') {
        const output = document.getElementById('output');
        output.innerHTML += `<p><strong>${username}:</strong> ${message}</p>`;
        messageInput.value = ''; // Clear only the message input
        messageInput.focus();

        // Scroll to the bottom of the chat window
        const chatWindow = document.getElementById('chat-window');
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
}
