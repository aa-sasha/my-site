const fs = require('fs');
fetch('https://branevsky.com/')
  .then(res => res.text())
  .then(text => {
    fs.writeFileSync('branevsky.html', text);
    console.log('Saved html');
  });
