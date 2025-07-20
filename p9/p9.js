const fs = require('fs');

fs.writeFileSync('demo.txt', 'This is a demo file.');

const content = fs.readFileSync('demo.txt', 'utf8');
console.log('📄 File Contents:', content);

fs.appendFileSync('demo.txt', '\nAppending more text.');

fs.renameSync('demo.txt', 'renamed_demo.txt');
console.log('📁 File renamed to renamed_demo.txt');

// fs.unlinkSync('renamed_demo.txt');
console.log('🗑️ File deleted successfully');
