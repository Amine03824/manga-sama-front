/* eslint-disable import/prefer-default-export */
import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root/Root';
import SignUp from './routes/SignUp/SignUp';
import Login from './routes/Login/Login';

import UserProfilPage from './routes/UserProfilPage/UserProfilPage';
import RootUser from './routes/RootUser/RootUser';

import Article from './routes/Article/Article';

import Contact from './routes/Contacts/Contacts';
import LegalNotice from './routes/LegalNotice/LegalNotice';
import About from './routes/About/About';
import Team from './routes/Team/Team';
import Home from './routes/Home/Home';
import Category from './routes/Category/category';
import CreateArticle from './routes/CreateArticle/CreateArticle';

// import mangaData from './data/data';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
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
        path: 'article/:id',
        element: <Article />,
      },
      {
        path: 'category/:id',
        element: <Category />,
      },
      {
        path: 'article/create',
        element: <CreateArticle />,
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
