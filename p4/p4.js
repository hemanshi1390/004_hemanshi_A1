const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

function zipFolder(sourceFolder, outPath) {
  const output = fs.createWriteStream(outPath);
  const archive = archiver('zip', {
    zlib: { level: 9 } // Compression level
  });

  return new Promise((resolve, reject) => {
    output.on('close', () => {
      console.log(`Created zip file (${archive.pointer()} total bytes) at ${outPath}`);
      resolve();
    });

    archive.on('error', (err) => reject(err));

    archive.pipe(output);

    archive.directory(sourceFolder, false);

    archive.finalize();
  });
}

// Example usage:
const folderToZip = path.join(__dirname, 'myFolder'); 
const zipFilePath = path.join(__dirname, 'myFolder.zip');

zipFolder(folderToZip, zipFilePath)
  .then(() => console.log('Zipping completed!'))
  .catch(err => console.error('Error:', err));
