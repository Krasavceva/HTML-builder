const fs = require('fs');
const path = require('path');
const text = path.join(__dirname, 'text.txt');

let stream = fs.createReadStream(text);

stream.on("data", function (data) {
    let result = data.toString();
    console.log(result);
});