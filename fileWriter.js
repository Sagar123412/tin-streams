const fs = require('fs');


//to read terminal inputs uisng streams
// const writableStream = fs.createWriteStream('log.txt');
// process.stdin.pipe(writableStream)


//to show any file data on terminal we use this
const readableSteam = fs.createReadStream('log.txt');
readableSteam.pipe(process.stdout)