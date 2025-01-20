const fs = require('fs');
const path = require('path');

const fileDir = path.join(__dirname, 'files');
const fileCopyDir = path.join(__dirname, 'files-copy');

fs.access(fileCopyDir, function(err) {
    if (err && err.code === 'ENOENT') {
        fs.mkdir(fileCopyDir, {recursive:true},  err => {
            if (err) throw err;
        })
    } 
});


fs.readdir(fileDir,( err, files) => {
    if (err) throw err;
    for (const file of files) {
        let srcPath = path.join(fileDir, file);
        let copyPath = path.join(__dirname, 'files-copy', file);
        fs.copyFile(srcPath, copyPath, error => { if (error) throw error;}); 
    }
    console.log('файлы скопированы успешно')
})