const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname, 'text.txt'));

let result = '';
rs.on('data', (chunk) => result += chunk);
rs.on('end', () => console.log(result));
rs.on('error', err => console.log('Error: ', err.message));