/**
 * Script to generate a noise pattern PNG (200x200px)
 * Uses sharp to create a grayscale noise texture
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const WIDTH = 200;
const HEIGHT = 200;

// Generate random grayscale noise
const generateNoiseBuffer = (width, height) => {
  const buffer = Buffer.alloc(width * height * 4); // RGBA

  for (let i = 0; i < buffer.length; i += 4) {
    // Random grayscale value (0-255)
    const value = Math.floor(Math.random() * 256);
    buffer[i] = value;     // R
    buffer[i + 1] = value; // G
    buffer[i + 2] = value; // B
    buffer[i + 3] = 255;   // A (fully opaque)
  }

  return buffer;
};

async function generateNoise() {
  try {
    const noiseBuffer = generateNoiseBuffer(WIDTH, HEIGHT);

    // Create PNG with sharp
    await sharp(noiseBuffer, {
      raw: {
        width: WIDTH,
        height: HEIGHT,
        channels: 4
      }
    })
    .png({
      compressionLevel: 9, // Maximum compression
      quality: 80
    })
    .toFile(path.join(__dirname, '../public/noise-pattern.png'));

    console.log('✅ Noise pattern PNG generated successfully at public/noise-pattern.png');

    // Check file size
    const stats = fs.statSync(path.join(__dirname, '../public/noise-pattern.png'));
    console.log(`📊 File size: ${(stats.size / 1024).toFixed(2)} KB`);
  } catch (error) {
    console.error('❌ Error generating noise pattern:', error);
    process.exit(1);
  }
}

generateNoise();
