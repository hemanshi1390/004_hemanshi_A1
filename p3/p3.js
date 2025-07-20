const readline = require('readline');

const qa = {
  "hello": "hii,hemanshi?",
  "hi": "Hello! How can I help you?",
  "how are you": "I'm good, thanks for asking!",
  "bye": "Goodbye! Have a nice day!"
};
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'You: '
});

console.log("welcome! I'm a simple chatbot. ");

rl.prompt();

rl.on('line', (input) => {
  const userInput = input.toLowerCase();

  // Check if userInput matches a key in qa object (exact or contains)
  let response = "Sorry, I don't understand that.";

  // Simple matching: check if any key is included in input
  for (const question in qa) {
    if (userInput.includes(question)) {
      response = qa[question];
      break;
    }
  }

  console.log('Bot:', response);

  if (userInput === 'bye') {
    rl.close();
  } else {
    rl.prompt();
  }
});

rl.on('close', () => {
  process.exit(0);
});
