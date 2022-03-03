import React from 'react';
import { NamedRoute, NamedRouter, NamedSwitch } from 'react-named-router';
import { appPages } from './common/core';
import LayoutDefault from './common/layout/Default';
import LayoutLogin from './common/layout/Login';
import { AppLayout } from './common/core/types';

const getRoutesByLayoutName = (name: string) => {
  const routes = appPages.filter((page) => page.layout === name);
  return routes;
};

const layoutRoutes = [
  {
    name: AppLayout.LOGIN,
    component: LayoutLogin,
    path: '/login/:path?',
    exact: true,
  },
  {
    name: AppLayout.DEFAULT,
    component: LayoutDefault,
    path: '/',
  },
];

const App: React.FC = () => {
  const allRoutes = appPages.map((page) => page.route);
  allRoutes.push(...layoutRoutes);

  return (
    <NamedRouter routes={allRoutes}>
      <NamedSwitch>
        {layoutRoutes.map(
          ({ name: layoutName, component: LayoutComponent }) => (
            <NamedRoute key={layoutName} name={layoutName}>
              <LayoutComponent>
                {getRoutesByLayoutName(layoutName).map(({ route }) => (
                  <NamedRoute key={route.name} {...route} />
                ))}
              </LayoutComponent>
            </NamedRoute>
          )
        )}
      </NamedSwitch>
    </NamedRouter>
  );
};

export default App;
