import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      },
      cdn: 'https://esm.sh/'
    }),
    presetWebFonts({
      provider: 'fontshare',
      fonts: {
        sans: 'Satori',
        headings: 'Syne:700'
      }
    })
  ]
})
