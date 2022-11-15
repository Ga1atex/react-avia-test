import React from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

export const AviaPage = React.lazy(() => import('../pages/avia/Avia'));
export const AviaInfo = React.lazy(() => import('../pages/avia/AviaInfo'));

export enum RouteNames {
  AVIA = '/avia',
  INFO = '/info',
}

type AppRouteProps = {
  routes: RouteObject[];
};

export const routes: RouteObject[] = [
  {
    path: RouteNames.AVIA,
    element: <AviaPage />,
  },
  {
    path: `${RouteNames.AVIA}${RouteNames.INFO}`,
    element: <AviaInfo />,
  },
  {
    path: '*',
    element: <Navigate to={RouteNames.AVIA} />,
  },
];

export default function AppRoutes({ routes }: AppRouteProps) {
  return useRoutes(routes);
}
