/* eslint-disable import/prefer-default-export */
import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root/Root';
import SignUp from './routes/SignUp/SignUp';
import Login from './routes/Login/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);
