const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'text.txt');
const stream = fs.createReadStream(file, 'UTF-8');

let result = '';

stream.on('result', elem => result += elem);
stream.on('error', err => console.log(err.message));
stream.on('end', () => console.log(result));