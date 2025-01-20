const fs = require('fs/promises');
const path = require('path');

const folderPath = path.join(__dirname, 'secret-folder');

async function displayFilesInfo() {
    try {
        const files = await fs.readdir(folderPath, { withFileTypes: true });
        for (const file of files) {
            if (file.isFile()) {
                const filePath = path.join(folderPath, file.name);
                const stats = await fs.stat(filePath);
                const fileName = path.parse(file.name).name;
                const fileExtension = path.extname(file.name).slice(1);
                const fileSize = stats.size; 
                console.log(`${fileName} - ${fileExtension} - ${fileSize} bytes`);
            }
        }
    } catch (error) {
        console.error('Ошибка:', error.message);
    }
}

displayFilesInfo();