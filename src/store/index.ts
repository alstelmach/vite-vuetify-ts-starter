import persistencePlugin from 'pinia-plugin-persistedstate';
import { createPinia, type Pinia } from 'pinia';

const pinia: Pinia = createPinia();
pinia.use(persistencePlugin);

export default pinia;

import getAppStateStore from './AppStateStore';
import getUserConfigStore from './UserConfigStore';

export {
  getAppStateStore,
  getUserConfigStore,
};
