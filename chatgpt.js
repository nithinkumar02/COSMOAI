const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

async function sendMessage() {
    let userMessage = userInput.value.trim();
    if (userMessage === "") return;

    appendMessage("You: " + userMessage, "user-message");

    // AI Simulation
    let botResponse = await getAIResponse(userMessage);
    appendMessage("Bot: " + botResponse, "bot-message");

    userInput.value = "";
}
function startChat() {
    document.getElementById("intro-screen").style.display = "none"; // Hide intro
    document.getElementById("chat-container").style.transform = "translateY(-100vh)"; // Slide up chat
}


function appendMessage(message, className) {
    let messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    messageDiv.classList.add("message", className);
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// AI Connection (External API)
async function getAIResponse(message) {
    const responses = {
        "hello": "Hello! How can I assist you?",
        "how are you": "I'm here to help!",
        "what is ai": "AI enables computers to mimic human intelligence.",
        "tell me a joke": "Why did the computer catch a cold? Because it left its Windows open!"
    };
    return responses[message.toLowerCase()] || "I don't understand, but AI is learning!";
}
