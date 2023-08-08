const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Masukan Sebuah Kalimat : ', (question) => {
  rl.question('Masukan Index yang ingin anda cek : ', (search) => {
    const indexText = question.lastIndexOf(search);
    if (indexText !== -1) {
      console.log(`Kata ${search} ditemukan pada index terakhir : ${indexText}`);
    } else {
      console.log(`Kata ${search} tidak di temukan`);
    }
    rl.close();
  });
});
