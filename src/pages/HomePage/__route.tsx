import loadable from '@loadable/component';
import { AppLayout } from 'src/common/core/types';
import { registerPage } from 'src/common/core';

export default registerPage({
  layout: AppLayout.DEFAULT,
  route: {
    component: loadable(() => import('./index')),
    name: 'HomePage',
    exact: true,
    path: '/',
  },
  menu: {
    key: 'dashboard',
    title: 'Dashboard',
    to: 'HomePage',
    order: 1,
  },
});
