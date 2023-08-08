const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Input Your First Text  : ', (question) => {
  rl.question('Input Last Index Text : ', (firstIndex) => {
      firstIndex = Number(firstIndex);
      const result = question.substr(question.length - firstIndex);
      console.log({question: question, lastIndex: firstIndex, result: result});
      rl.close();
  });
});
