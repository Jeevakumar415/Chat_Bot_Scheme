function sendMessage() {
    const userInput = document.getElementById('userInput');
    const messageText = userInput.value;
    if (messageText.trim() === '') return;

    const messagesContainer = document.getElementById('messages');

    // User message
    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.textContent = messageText;
    messagesContainer.appendChild(userMessage);

    // Clear the input field
    userInput.value = '';

    // Scroll to the bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Bot response (simple echo for demo purposes)
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'message';
        botMessage.textContent = 'Hello Gokul! What schemes you need to know?: ' + messageText;
        messagesContainer.appendChild(botMessage);
        
        // Scroll to the bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);
}
