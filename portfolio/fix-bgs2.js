const fs = require('fs');
const path = require('path');
const dir = './src/components/sections';
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace section bg colors
    content = content.replace(/<section([^>]*)className=\"([^\"]*)(bg-[a-zA-Z0-9\[\]#\-]+)([^\"]*)\"/g, '<section\="\ \"');
    content = content.replace(/<section([^>]*)className=\"([^\"]*)(bg-[a-zA-Z0-9\[\]#\-]+)([^\"]*)\"/g, '<section\="\ \"');
    
    fs.writeFileSync(filePath, content);
  }
});
