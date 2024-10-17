import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Añade esta línea para asegurarte de que use la ruta correcta.
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html'
      },
      external: [
        // puedes añadir módulos que desees externalizar aquí
      ]
    }
  }
});
