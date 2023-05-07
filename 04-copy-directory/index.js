const fs = require('fs');
const path = require('path');

function copyDir() {
  const sourceDir = path.join(__dirname, 'files');
  const destDir = path.join(__dirname, 'files-copy');

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir);
  }

  fs.readdirSync(sourceDir).forEach((file) => {
    const sourceFile = path.join(sourceDir, file);
    const destFile = path.join(destDir, file);
    const fileStats = fs.statSync(sourceFile);

    if (fileStats.isFile()) {
      const readStream = fs.createReadStream(sourceFile);
      const writeStream = fs.createWriteStream(destFile);

      readStream.pipe(writeStream);
    }
  });
}

copyDir();

