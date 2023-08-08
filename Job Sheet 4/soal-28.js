const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Input Your First Text  : ', (question) => {
  const result = question.toLowerCase();
  console.log({question: question, result: result});
  rl.close();
});
