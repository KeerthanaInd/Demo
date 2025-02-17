/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enable static export
    distDir: 'dist', // Change build directory
    images: {
      unoptimized: true // Required for static export
    }
  }
  
module.exports= nextConfig