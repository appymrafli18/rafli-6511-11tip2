const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Masukan Sebuah Kalimat : ', (question) => {
  const textUpper = question.toUpperCase();
  console.log(`Kalimat dalam huruf besar : ${textUpper}`);
  rl.close();
});
