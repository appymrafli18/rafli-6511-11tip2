const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Masukan Sebuah Kalimat : ', (question) => {
  rl.question('Masukan Index Awal : ', (searhFirst) => {
    rl.question("Masukan Index Akhir : ", (searchLast) => {
    //  konver nilai index ke tipe data
      searhFirst = Number(searhFirst);
      searchLast = Number(searchLast);

      const sliceString = question.slice(searhFirst, searchLast);
      console.log(`Hasil Slice dari Index ${searhFirst} hingga ${searchLast}: ${sliceString}`);
      rl.close();
    })
  });
});
