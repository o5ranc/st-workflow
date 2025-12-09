import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { md } from 'vuetify/iconsets/md'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { md, mdi },
  },
  theme: {
    defaultTheme: 'light',
  },
})