const fs = require('fs');
const path = require('path');

function fixPaths(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixPaths(filePath);
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Заменяем абсолютные пути на относительные
      content = content.replace(/href="\/_next\//g, 'href="./_next/');
      content = content.replace(/src="\/_next\//g, 'src="./_next/');
      content = content.replace(/href="\/favicon\.ico"/g, 'href="./favicon.ico"');
      content = content.replace(/src="\//g, 'src="./');
      content = content.replace(/url\(\//g, 'url(./');
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed paths in ${filePath}`);
    }
  });
}

const outDir = path.join(__dirname, '..', 'out');
if (fs.existsSync(outDir)) {
  fixPaths(outDir);
  console.log('All paths have been fixed!');
} else {
  console.log('Out directory not found. Run "npm run build" first.');
}
