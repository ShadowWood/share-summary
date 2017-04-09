const fs = require('fs');
const path = require('path');

let resolve = (str) => path.resolve(__dirname, str);

fs.mkdir(resolve('./practice-fs'), (err) => {
  if (err) {
    console.error(err);
    return ;
  }
  const content = `
  let content = \`I'm practicing writing a javascript file at \$\{Date.now\}\`;

  console.log(content);
  `;
  fs.writeFile(resolve('./practice-fs/practice.js'), content, (err) => {
    if (err) {
      console.error(err);
    }

    console.log('finish practice');
  })
})