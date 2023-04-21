import { defineStore } from 'pinia';

const userConfigStoreKey: string = 'user-config';

interface ConfigState {
  _darkThemeModeEnabled: boolean;
  _currentLocale: string;
}

export default defineStore(userConfigStoreKey, {
  state: (): ConfigState => ({
    _darkThemeModeEnabled: window.matchMedia('(prefers-color-scheme: dark)')
      .matches,
    _currentLocale:
      (window.navigator.languages && window.navigator.languages[0]) ||
      window.navigator.language,
  }),
  getters: {
    isDarkModeEnabled: (state): boolean => state._darkThemeModeEnabled,
    locale: (state): string => state._currentLocale,
  },
  actions: {
    toggleTheme() {
      this._darkThemeModeEnabled = !this._darkThemeModeEnabled;
    },
    setLocale(locale: string) {
      this._currentLocale = locale;
    },
  },
  persist: {
    key: userConfigStoreKey,
    storage: window.sessionStorage,
  },
});
