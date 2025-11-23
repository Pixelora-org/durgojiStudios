const fs = require('fs');
const path = require('path');

// Copy dist contents to root (for Cloudflare Pages if it's looking in root)
const distDir = path.join(__dirname, '..', 'dist');
const rootDir = path.join(__dirname, '..');

if (fs.existsSync(distDir)) {
  console.log('Copying dist files to root for Cloudflare Pages...');
  
  function copyRecursive(src, dest) {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();
    
    if (isDirectory) {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      fs.readdirSync(src).forEach(childItemName => {
        copyRecursive(
          path.join(src, childItemName),
          path.join(dest, childItemName)
        );
      });
    } else {
      fs.copyFileSync(src, dest);
    }
  }
  
  // Copy all files from dist to root
  const items = fs.readdirSync(distDir);
  items.forEach(item => {
    const srcPath = path.join(distDir, item);
    const destPath = path.join(rootDir, item);
    
    // Skip if it's a directory that already exists in root (like node_modules)
    if (fs.existsSync(destPath) && fs.statSync(destPath).isDirectory() && item !== 'assets' && item !== 'images') {
      console.log(`Skipping ${item} (already exists)`);
      return;
    }
    
    copyRecursive(srcPath, destPath);
  });
  
  console.log('✓ Files copied to root');
} else {
  console.log('⚠ dist directory not found');
}

