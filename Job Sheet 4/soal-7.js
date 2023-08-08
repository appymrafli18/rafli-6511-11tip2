const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Input Your Text  : ', (question) => {
  rl.question('Input Index : ', (index) => {
    console.log({question: question, Character: question.charAt(index)});
    rl.close();
  })
});
