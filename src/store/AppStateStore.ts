import { defineStore } from 'pinia';

const viewDetails:string = 'view-details';

type ViewDetailsState = {
  _loading: boolean;
};

export default defineStore(viewDetails, {
  state: (): ViewDetailsState => ({
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
