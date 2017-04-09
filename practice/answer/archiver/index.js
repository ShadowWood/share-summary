const fs = require('fs');
const archiver = require('archiver');

let output = fs.createWriteStream('./test.zip');

let archive = archiver('zip', {
  zlib: {level: 9}
});

// listen for all archive data to be written
output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('archiver has been finalized and the output file descriptor has closed.');
});

// good practice to catch this error explicitly
archive.on('error', function(err) {
  throw err;
});

// pipe archive data to the file
archive.pipe(output);

archive.bulk([
  {src: ['../child_process-pra/**']}
]);

archive.finalize();