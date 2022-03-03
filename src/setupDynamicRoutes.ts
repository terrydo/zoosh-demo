/**
 * The idea of this file is to include all __route files for automatically page registering
 * and export a <Router> component which includes all of them;
 */

import { importAll } from './common/core';

export const setupDynamicRoutes = () => {
  const routeFiles = require.context('./pages/', true, /__route\.tsx?/);
  importAll(routeFiles);
};
