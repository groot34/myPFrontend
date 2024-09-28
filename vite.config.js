import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://my-pf-backend.vercel.app',
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  // },
})


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import svgr from 'vite-plugin-svgr'; // Install this plugin

// export default defineConfig({
//   plugins: [react(), svgr()],
// });
