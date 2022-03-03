import { NamedRouteProps } from 'react-named-router';
import { NamedLocation } from 'react-named-router/lib/utils';

export enum AppLayout {
  DEFAULT = 'DefaultLayout',
  LOGIN = 'LoginLayout',
}

export interface AppMenu {
  key: string;

  /**
   * `to` is the route name in the App
   */
  to?: string | NamedLocation;

  /**
   * `href` is used for external links
   */
  href?: string;
  target?: string;
  order?: number;
  title?: string;
  icon?: JSX.Element;

  /**
   * Children Menu
   */
  submenu?: AppMenu[];
}

export interface AppPage {
  /**
   * Route for the View
   */
  route: NamedRouteProps;

  layout?: AppLayout;
  menu?: AppMenu;
}
