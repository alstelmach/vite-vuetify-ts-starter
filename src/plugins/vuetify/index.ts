import { aliases, mdi } from 'vuetify/iconsets/mdi';
import { createVuetify } from 'vuetify';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import { en } from 'vuetify/locale';

import { loadFonts } from './WebFontLoader';
await loadFonts();

import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

export { components, directives };

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  locale: {
    locale: 'en',
    fallback: 'en',
    messages: { en },
  },
  theme: {
    defaultTheme: 'light',
  },
});
