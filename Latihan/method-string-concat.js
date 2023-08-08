const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Masukan Sebuah Kalimat : ', (q1) => {
  rl.question('Masukan Kalimat Kedua : ', (q2) => {
    const combine = q1.concat(q2);
    console.log(`Kalimat pertama ${q1}, Kalimat Kedua ${q2}, Kalimat Gabungan ${combine}`);
    rl.close();
  });
});
