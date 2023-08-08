const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Masukan Sebuah Kalimat : ', (question) => {
  const textTrimmed = question.trim();
  console.log(`Kalimat setelah di trim : ${textTrimmed}`);
  rl.close();
});
