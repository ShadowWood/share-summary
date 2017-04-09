const events = require('events');
const fs = require('fs');


const newEmiter = new events();

newEmiter.on('log-write', (path, content) => {
  let writeStream = fs.createWriteStream(path, {flags: 'a'});
  writeStream.write(content);
})

newEmiter.emit('log-write', './log.log', 'testlogasdfsda');