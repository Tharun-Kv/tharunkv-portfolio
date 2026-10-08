const fs = require('fs');
const path = require('path');
const dir = './src/components/sections';
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace section bg colors with bg-transparent
    content = content.replace(/<section([^>]*)className=\"([^\"]*)(bg-\[#[0-9a-fA-F]+\])([^\"]*)\"/g, '<section\="\-transparent\"');
    
    fs.writeFileSync(filePath, content);
    console.log('Updated ' + file);
  }
});
