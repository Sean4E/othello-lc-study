// Run this script in browser console while generate-icons.html is open
// Or use Node.js with canvas package installed

const fs = require('fs');
const { createCanvas } = require('canvas');

const sizes = [16, 32, 72, 96, 128, 144, 152, 180, 192, 384, 512];

function drawIcon(ctx, size) {
  // Background gradient simulation
  ctx.fillStyle = '#1f1b18';
  const radius = size * 0.15;

  // Rounded rectangle
  ctx.beginPath();
  ctx.roundRect(0, 0, size, size, radius);
  ctx.fill();

  // Add subtle gradient overlay
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, 'rgba(45, 37, 32, 0.8)');
  gradient.addColorStop(1, 'rgba(26, 22, 20, 0.8)');
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.roundRect(0, 0, size, size, radius);
  ctx.fill();

  // Gold gradient for text
  const goldGradient = ctx.createLinearGradient(0, 0, size, size);
  goldGradient.addColorStop(0, '#f4d03f');
  goldGradient.addColorStop(1, '#d4af37');

  // Draw "O" letter
  ctx.fillStyle = goldGradient;
  ctx.font = `bold ${size * 0.55}px Georgia, "Times New Roman", serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Shadow
  ctx.shadowColor = 'rgba(0,0,0,0.4)';
  ctx.shadowBlur = size * 0.04;
  ctx.shadowOffsetY = size * 0.02;

  ctx.fillText('O', size / 2, size / 2 + size * 0.03);
}

sizes.forEach(size => {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  drawIcon(ctx, size);

  let filename;
  if (size === 16) filename = 'favicon-16x16.png';
  else if (size === 32) filename = 'favicon-32x32.png';
  else if (size === 180) filename = 'apple-touch-icon.png';
  else filename = `icon-${size}x${size}.png`;

  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(filename, buffer);
  console.log(`Generated ${filename}`);
});

console.log('All icons generated!');
