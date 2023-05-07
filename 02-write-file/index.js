const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const filePath = 'input.txt';

const writeToFile = (data) => {
  fs.appendFile(filePath, `${data}\n`, (err) => {
    if (err) throw err;
    console.log(`Data has been added to the file: ${filePath}`);
    rl.prompt();
  });
}

rl.setPrompt('Введите текст для записи в файл: ');

rl.prompt();

rl.on('line', (input) => {
  if (input.toLowerCase() === 'exit') {
    console.log('Программа завершена.');
    process.exit(0);
  } else {
    writeToFile(input);
  }
});

rl.on('close', () => {
  console.log('Программа завершена.');
  process.exit(0);
});
