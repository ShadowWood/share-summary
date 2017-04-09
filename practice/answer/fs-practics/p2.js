const fs = require('fs');
const path = require('path');

let resolve = (str) => path.resolve(__dirname, str);

let writeStream1 = fs.createWriteStream(resolve('./practice-fs/p-write1.js'));
let writeStream2 = fs.createWriteStream(resolve('./practice-fs/p-write2.js'));
let readStream1 = fs.createReadStream(resolve('./practice-fs/p-write1.js'));

const content = `
let content = \`I'm practicing writing a javascript file at \$\{Date.now\}\`;

console.log(content);
`;

readStream1.pipe(writeStream2);

writeStream1.write(content, 'utf8', (err) => {
  if (err) {
    throw new Error(err);
  }
  writeStream1.emit('close');
});

