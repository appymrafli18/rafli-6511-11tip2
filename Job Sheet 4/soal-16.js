const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Input Your First Text  : ', (question) => {
  rl.question('Input Your Search Text : ', (searchText) => {
    const index = question.indexOf(searchText)
    if (index !== -1) {
    console.log({question: question, SearchText: searchText, index: index});
    } else {
      console.log(`Text ${searchText} not Found in Text Your Input First Text!`);
    }
    rl.close();
  })
});
