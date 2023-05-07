const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'secret-folder');

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  
  files.forEach((file) => {
    const filePath = path.join(folderPath, file);
    
    fs.stat(filePath, (err, stats) => {
      if (err) {
        console.error(err);
        return;
      }
      
      if (stats.isFile()) {
        const extension = path.extname(file).slice(1);
        const fileSize = Math.round(stats.size / 1024 * 100) / 100; // размер в кб, округленный до сотых
        
        console.log(`${path.parse(file).name} - ${extension} - ${fileSize}kb`);
      }
    });
  });
});
