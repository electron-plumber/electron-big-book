import path from 'path'
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import UnoCSS from 'unocss/vite'
import { presetUno, presetIcons, presetAttributify  } from 'unocss'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '~/',
        replacement: `${path.resolve(__dirname, './.vitepress/vitepress')}/`,
      }
    ]
  },

  server: {
    port: 4001,
    host: true
  },

  css: {
    preprocessorOptions: {
      scss: {
        charset: false
      }
    }
  },

  build: {
    // Turning off brotliSize display can slightly deduce packaging time
    brotliSize: false,
    // Set block size warning limit prompt
    chunkSizeWarningLimit: 2000,
  },

  plugins: [
    Components({
      dirs: ['.vitepress/vitepress/components'],

      allowOverrides: true,

      // custom resolvers
      resolvers: [
        // auto import icons
        // https://github.com/antfu/unplugin-icons
        IconsResolver(),
      ],

      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),

    Icons({
      autoInstall: true,
    }),

    UnoCSS({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons()
      ]
    }),
  ]
})
