import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Page from './Page';
import Dashboard from './Dashboard';
import Root from './Outlet';
import Sitemap from './Sitemap';
import Settings from './Settings';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/page",
        element: <Page />
      },
      {
        path: "/page/:id",
        element: <Page />
      },
      {
        path: "/settings",
        element: <Settings />
      },
      {
        path: "/sitemap",
        element: <Sitemap />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
