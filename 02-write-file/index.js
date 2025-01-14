const fs = require('fs');
const path = require('path');

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const write = fs.createWriteStream(path.join(__dirname, 'text.txt'));

rl.write('Введите ваш текст!\n');

rl.on('line', (text) => {
  if (text.trim() === 'exit') rl.close();
  write.write(`${text}\n`, error => {
    if (error) throw error;
  });
});

rl.on('close', () => {
  process.exit();
});

process.on('SIGINT', () => {
  process.exit();
});

process.on('exit', code => {
  if (code === 0) {
    console.log('Программа завершена');
  } else {
    console.log(`Ошибка ${code}`);
  }
})