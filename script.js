function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput !== "") {
      var chatBox = document.getElementById("chat-box");
      var userMessage = document.createElement("p");
      userMessage.innerText = "You: " + userInput;
      chatBox.appendChild(userMessage);
      document.getElementById("user-input").value = "";
      // Call a function to generate a response from the chatbot
      generateResponse(userInput);
    }
  }
  
  function generateResponse(userInput) {
    var chatBox = document.getElementById("chat-box");
    var botResponse = document.createElement("p");
    botResponse.innerText = "Bot: " + getBotResponse(userInput);
    chatBox.appendChild(botResponse);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  function getBotResponse(userInput) {
    var response;
    switch (userInput.toLowerCase()) {
      case "hello":
      case "hi":
        response = "Hi there! How can I assist you today?";
        break;
      case "how are you?":
        response = "I'm just a bot, but thanks for asking!";
        break;
      case "bye":
      case "goodbye":
        response = "Goodbye! Have a great day!";
        break;
      default:
        response = "I'm sorry, I didn't understand that. Can you please rephrase?";
        break;
    }
    return response;
  }
  