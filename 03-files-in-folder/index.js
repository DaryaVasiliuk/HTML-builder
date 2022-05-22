const { readdir, stat } = require('fs/promises');
const path = require('path');

try {
    
    (async () => {
        const files = await readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true })
        
        for (const file of files) {
            if(file.isFile()) {
                console.log('file name: '+ file.name.split('.')[0]);
                console.log('extension: '+path.extname(file.name));
                console.log('path: '+ path.join(__dirname, 'secret-folder', file.name));
                const stats = await stat(__dirname, 'secret-folder', file.name);
                console.log(stats);
                console.log('---------------------');
            }
        }
    })();   
} catch (err) {
  console.error(err);
}

