/* eslint-disable import/prefer-default-export */
import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root/Root';
import SignUp from './routes/SignUp/SignUp';
import Login from './routes/Login/Login';
import Article from './routes/Article/Article';

import Contact from './routes/Contacts/Contacts';
import LegalNotice from './routes/LegalNotice/LegalNotice';
import About from './routes/About/About';
import Team from './routes/Team/Team';



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
      {
<<<<<<< HEAD
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'copyright',
        element: <LegalNotice />,
      },
      {
        path: 'about',
        element: <About />,
      },
      { path: 'team', element: <Team /> },
      {
=======
>>>>>>> 5ec5466b62b9d4dc76fadd7338f9fb288da5297b
        path: 'article',
        element: <Article />,
      },
    ],
  },
]);
