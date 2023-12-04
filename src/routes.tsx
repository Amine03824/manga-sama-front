/* eslint-disable import/prefer-default-export */
import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root/Root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
]);
