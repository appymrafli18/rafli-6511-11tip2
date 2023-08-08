const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Masukan Sebuah Kalimat : ', (question) => {
  rl.question('Masukan Index Awal : ', (searhFirst) => {
    rl.question("Masukan Panjang Substring : ", (length) => {
    //  konver nilai index ke tipe data
      searhFirst = Number(searhFirst);
      length = Number(length);

      const substrResult = question.substr(searhFirst, length);
      console.log(`Hasil Substr dari Index ${searhFirst} hingga ${length}: ${substrResult}`);
      rl.close();
    });
  });
});
