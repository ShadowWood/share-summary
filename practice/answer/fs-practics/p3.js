const fs = require('fs');
const path = require('path');

let resolve = (str) => path.resolve(__dirname, str);
let start = 0;

fs.watch(resolve('./practice-fs/p-write1.js'), (eventType, filename) => {
  if (eventType === 'change') {
    readAndWrite();
  }
});


function readAndWrite() {
  let writeStream2 = fs.createWriteStream(resolve('./practice-fs/p-write2.js'));
  let readStream1 = fs.createReadStream(resolve('./practice-fs/p-write1.js'));

  readStream1.pipe(writeStream2);
}