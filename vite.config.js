import { VitePWA } from 'vite-plugin-pwa'

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA({
    manifest:{
      name:"adivina el pokemon",
      short_name:"adivinaPokemon",
      description:"juego de pokemon en el cual debes adivinar el nombre de un pokemon aleatorio",
      theme_color:"#1b2e23",
      icons: [
        {
          src: './public/imagen-fondo 192.jpg',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: './public/imagen-fondo 512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
