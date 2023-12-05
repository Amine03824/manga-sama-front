/* eslint-disable import/prefer-default-export */
import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root/Root';
import SignUp from './routes/SignUp/SignUp';
import Login from './routes/Login/Login';
import UserProfilPage from './routes/UserProfilPage/UserProfilPage';
import RootUser from './routes/RootUser/RootUser';

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
  {
    path: '/user/:id',
    element: <RootUser />,
    children: [
      {
        path: '/user/:id',
        element: <UserProfilPage />,
      },
    ],
  },
]);
