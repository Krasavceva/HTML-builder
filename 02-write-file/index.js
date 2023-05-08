const fs = require('fs');
const path = require('path');
const { stdin, stdout, exit } = require('process');
const writeableStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));

stdout.write('Привет. Введи текст:\n');
stdin.on('data', (data) => {
    if (data.toString().trim() !== 'exit') {
        writeableStream.write(data);
    } else {
        exitProgramm();
    }
});

function exitProgramm() {
    stdout.write('\nУдачи в изучении Node.js!');
    exit();
}

process.on('SIGINT', exitProgramm);