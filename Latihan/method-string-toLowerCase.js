const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Masukan Sebuah Kalimat : ', (question) => {
  const textLower = question.toLowerCase();
  console.log(`Kalimat dalam huruf kecil : ${textLower}`);
  rl.close();
});
