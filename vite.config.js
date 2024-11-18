import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
// Import plugin jika diperlukan (misalnya, untuk Tailwind CSS)
import path from 'path';

export default defineConfig({
  root: './', // Root folder untuk proyek
  base: './', // Untuk jalur relatif (khusus deployment GitHub Pages)
  build: {
    outDir: 'dist', // Output folder untuk build
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'), // Lokasi file utama
    },
  },
  server: {
    port: 3000, // Port server lokal
    open: true, // Membuka browser secara otomatis
  },
   css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
