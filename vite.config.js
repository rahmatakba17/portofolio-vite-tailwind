import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import path from 'path';

export default defineConfig({
  root: './',  // Menentukan folder root
  base: '/my-portfolio/', // Sesuaikan dengan nama repo GitHub Anda (misal: /my-portfolio/)
  build: {
    outDir: 'dist',  // Output folder untuk hasil build
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'),  // Menentukan file utama
    },
  },
  server: {
    port: 3000,  // Menentukan port lokal
    open: true,  // Membuka browser otomatis saat server dijalankan
  },
  css: {
    postcss: {
      plugins: [tailwindcss],  // Menyertakan Tailwind CSS sebagai plugin
    },
  },
});
