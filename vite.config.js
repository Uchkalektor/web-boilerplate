import { resolve } from 'path'
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'

const defaultConfig = defineConfig({
    root: resolve(__dirname, 'src'),
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'src/partials'),
        })
    ],
    build: {
        outDir: resolve(__dirname, 'dist'),
    },
})

export default defineConfig(({ command, mode, ssrBuild }) => {
    if (command === 'serve') {
        return {
            ...defaultConfig,
        }
    } else {
        return {
            ...defaultConfig,
        }
    }
})
