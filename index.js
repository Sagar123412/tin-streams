// Importing the http module
const http = require('http');
const fs = require('fs');
const { Transform, pipeline } = require('stream');
const replaceWordProcessing = require('./replaceWordProcessor')
const uppercaseWordProcessing = require('./uppercaseWordProcessor');

// Define the port number
const port = 3000;

// Creating the server
const server = http.createServer((req, res) => {
    // Handling different routes
    // if (req.url === '/') {
    //     // Home route handler
    //     res.end('Welcome to the home page!\n');
    // }

    //Downloading big file bad way

    const file = fs.readFileSync('bunny.mp4');

    // const file = fs.readFileSync('webhooks.mp4');
    // res.writeHead(200, { 'Content-Type': 'video/mp4' });
    // return res.end(file);
    // res.end(file)




    //downloading files in a good  ways
    // const readableSteam = fs.createReadStream('bunny.mp4')


    //make it readabe to writable streams
    // readableSteam.pipe(res);

    //try video file


    // Copy big file using bad way
    // const file = fs.readFileSync('sample.txt');
    // fs.writeFileSync('output.txt', file);


    // Copy big file good way
    // const readStream = fs.createReadStream('sample.txt');
    // const writeStream = fs.createWriteStream('output.txt');


    //to check the buffer data in string formate by default it is in binary
    // readStream.on('data', (chunk) => {
    //     console.log('Chunk: ', chunk.toString());
    //     writeStream.write(chunk);
    // });

    // String processing
    // const sampleFileStream = fs.createReadStream('sample.txt');
    // const outputWritableStream = fs.createWriteStream('output.txt');


    //we can also use pipelines to arrange streams operations
    // pipeline(sampleFileStream,
    //     replaceWordProcessing,
    //     uppercaseWordProcessing,
    //     outputWritableStream,
    //     (err) => {
    //         if (err) {
    //             console.log('Error handling here...', err);
    //         }
    //     }
    //     )



    //performing events and handing errors to process on the streams data

    // sampleFileStream.on('data', (chunk) => {
    //     console.log('data received: ', chunk.toString());
    //     // Process
    //     const finalString = chunk.toString().replaceAll(/ipsum/gi, 'cool').toUpperCase();
    //     // Writable stream write
    //     outputWritableStream.write(finalString);
    // })

    // sampleFileStream
    
    // .pipe(replaceWordProcessing)
    // .on('error', (err) => {
    //     console.log(err)
    // })

    // .pipe(uppercaseWordProcessing)
    // .on('error', (err) => {
    //     console.log(err)
    // })

    // .pipe(outputWritableStream)
    // .on('error', (err) => {
    //     console.log(err)
    // });




});

// Listening to the specified port
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
