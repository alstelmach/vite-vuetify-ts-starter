import persistencePlugin from 'pinia-plugin-persistedstate';
import { createPinia, type Pinia } from 'pinia';

import getAppStateStore from './AppStateStore';
import getUserConfigStore from './UserConfigStore';

const pinia: Pinia = createPinia();
pinia.use(persistencePlugin);

export default pinia;

export { getAppStateStore, getUserConfigStore };
