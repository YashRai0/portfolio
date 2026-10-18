import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { nitro } from 'nitro/vite'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [tanstackStart(), nitro(), devtools(), tailwindcss(), react()],
})

export default config
