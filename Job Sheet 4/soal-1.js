const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Input Your Text For count your text : ', (question) => {
  console.log({question: question, count: question.length});
  rl.close();
});
