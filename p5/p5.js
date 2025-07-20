const AdmZip = require('adm-zip');

const zip = new AdmZip('Screenshots.zip');

zip.extractAllTo('extracted/', true);

console.log('ZIP file extracted successfully!');
