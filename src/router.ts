import {
  createRouter,
  createWebHistory,
  type Router,
  type NavigationGuardNext,
  type RouteLocationNormalized,
  type RouteRecordRaw,
} from 'vue-router';

import { nextTick } from 'vue';
import { getAppStateStore } from '@/store/index';

import AboutPage from '@/pages/AboutPage.vue';
import HomePage from '@/pages/HomePage';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
];

function setLoadingFlag(value: boolean): void {
  const store = getAppStateStore();
  store.setLoading(value);
}

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(
  async (
    _to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    setLoadingFlag(true);
    await nextTick();
    next();
  }
);

router.afterEach(() => {
  setLoadingFlag(false);
});

export default router;
