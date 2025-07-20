const fs = require('fs').promises;

async function deleteFile(filePath) {
  try {
    await fs.unlink(filePath);
    console.log(`File "${filePath}" deleted successfully.`);
  } catch (err) {
    console.error(`Failed to delete "${filePath}":`, err.message);
  }
}

deleteFile('p6.txt');
