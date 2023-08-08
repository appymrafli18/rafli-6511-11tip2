const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Input Your First Text  : ', (question) => {
  rl.question('Input First Index Text : ', (firstIndex) => {
    rl.question('Input Second Index Text : ', (secondIndex) => {
      firstIndex = Number(firstIndex);
      secondIndex = Number(secondIndex);

      const result = question.substring(firstIndex, secondIndex);
      console.log({question: question, firstIndex: firstIndex, secondIndex: secondIndex, result: result});
      rl.close();
    });
  });
});
