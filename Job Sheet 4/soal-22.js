const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Input Your First Text  : ', (question) => {
  rl.question('Input First Index Text : ', (firstIndex) => {
    rl.question('Input Last Index Text : ', (lastIndex) => {
      firstIndex = Number(firstIndex);
      lastIndex = Number(lastIndex);
      const result = question.substr(firstIndex, lastIndex);
      console.log({question: question, firstIndex: firstIndex, lastIndex: lastIndex, result: result});
      rl.close();
    })
  });
});
