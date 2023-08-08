const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Input Your First Text  : ', (question) => {
  rl.question('Input Your Second Text : ', (secondQuestion) => {
    console.log({questionFirst: question, questionSecond: secondQuestion, combine: question.concat(secondQuestion)});
    rl.close();
  })
});
