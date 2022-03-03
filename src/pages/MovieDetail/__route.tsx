import loadable from '@loadable/component';
import { AppLayout } from 'src/common/core/types';
import { registerPage } from 'src/common/core';

export default registerPage({
  layout: AppLayout.DEFAULT,
  route: {
    component: loadable(() => import('./index')),
    name: 'MovieDetail',
    exact: true,
    path: '/movie-detail/:id',
  },
  menu: {
    key: 'MovieDetail',
    title: 'Movie Detail',
    to: 'MovieDetail',
    order: 1,
  },
});
