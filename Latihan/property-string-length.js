const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question('Masukan Sebuah Kalimat : ', (q) => {
  // contoh property length
  console.log(`Panjang Kalimat : ${q.length}`);
  rl.close();
});
