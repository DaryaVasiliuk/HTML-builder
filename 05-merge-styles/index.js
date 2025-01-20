const fs = require('fs/promises');
const path = require('path');

const stylesFolderPath = path.join(__dirname, 'styles');
const outputFolderPath = path.join(__dirname, 'project-dist');
const bundleFilePath = path.join(outputFolderPath, 'bundle.css');

async function mergeStyles() {
  try {
    await fs.mkdir(outputFolderPath, { recursive: true });
      const files = await fs.readdir(stylesFolderPath, { withFileTypes: true });
        await fs.writeFile(bundleFilePath, '');
        for (const file of files) {
          const filePath = path.join(stylesFolderPath, file.name);
            if (file.isFile() && path.extname(file.name) === '.css') {
              const fileContent = await fs.readFile(filePath, 'utf8');
              await fs.appendFile(bundleFilePath, fileContent + '\n');
            }
        }
        console.log('Стили успешно объединены в bundle.css');
  } catch (error) {
    console.error('Ошибка при создании bundle.css:', error.message);
  }
}

mergeStyles();