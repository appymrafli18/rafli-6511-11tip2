const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Input Your First Text  : ', (question) => {
  rl.question('Input First Index Text : ', (firstIndex) => {
      firstIndex = Number(firstIndex);
      const result = question.substring(firstIndex);
      console.log({question: question, firstIndex: firstIndex, result: result});
      rl.close();
  });
});
