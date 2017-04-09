const child_process = require('child_process');
const fs = require('fs');

process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => {
  console.log(`input: ${chunk}`);
  let writeStream = fs.createWriteStream('./practice.log', {flags: 'a+'});
  writeStream.write(chunk);
});