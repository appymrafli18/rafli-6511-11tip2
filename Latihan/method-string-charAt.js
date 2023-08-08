const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Masukan Sebuah Kalimat : ', (q1) => {
  rl.question('Masukan Index yang ingin anda cek : ', (idx) => {
    idx = Number(idx);
    if (idx >= 0 && idx < q1.length) {
      const char = q1.charAt(idx);
      console.log(`Character pada Index ${idx} : ${char}`);
    } else {
      console.log('Index Tidak Valid');
    }
    rl.close();
  });
});
