import { AppPage } from './types';

export const appPages: AppPage[] = [];

export const injectPage = (page: AppPage) => {
  appPages.push(page);
};

export const registerPage = (page: AppPage) => {
  const { route } = page;

  if (!route.name) throw new Error('Please specify the route name!');

  injectPage(page);

  return true;
};

export function importAll(r: __WebpackModuleApi.RequireContext) {
  r.keys().forEach(r);
}
