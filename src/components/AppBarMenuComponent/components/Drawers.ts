import type { RouteLocationRaw } from 'vue-router';

interface DrawerMenuItem {
  title: string | '-';
  icon?: string;
  to?: RouteLocationRaw;
  active?: boolean;
  subDrawers?: DrawerMenuItem[];
}

const drawers: DrawerMenuItem[] = [
  {
    title: 'Home',
    icon: 'mdi-home',
    to: { name: 'Home' },
  },
  {
    title: '-',
  },
  {
    title: 'About',
    icon: 'mdi-information',
    to: { name: 'About' },
  },
];

export default drawers;
