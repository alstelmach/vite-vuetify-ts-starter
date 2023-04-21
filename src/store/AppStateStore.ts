import { defineStore } from 'pinia';

const appStateStoreKey: string = 'app-state';

interface AppState {
  _loading: boolean;
}

export default defineStore(appStateStoreKey, {
  state: (): AppState => ({
    _loading: true,
  }),
  getters: {
    loading: (state): boolean => state._loading,
  },
  actions: {
    setLoading(display: boolean) {
      this._loading = display;
    },
  },
});
