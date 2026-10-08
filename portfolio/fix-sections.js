const fs = require('fs');
const files = ['about', 'achievements', 'certifications', 'contact', 'experience', 'hero', 'projects', 'skills'];
files.forEach(f => {
  let path = 'src/components/sections/' + f + '.tsx';
  let content = fs.readFileSync(path, 'utf8');
  if (f === 'hero') {
  } else {
  }
  fs.writeFileSync(path, content);
  console.log('Fixed ' + f);
});
