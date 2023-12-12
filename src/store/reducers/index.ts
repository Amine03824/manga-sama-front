import articlesReducer from './article';
import categoriesReducer from './categories';
import loginFormReducer from './loginForm';
import signUpFormReducer from './signUpForm';
import mangaReducer from './manga';
import userPageReducer from './userPage';

import createArticleReducer from './createArticle';

import searchBarMenuReducer from './searchBarMenu';

const reducer = {
  article: articlesReducer,
  loginForm: loginFormReducer,
  signUpForm: signUpFormReducer,
  categories: categoriesReducer,
  manga: mangaReducer,
  userPage: userPageReducer,

  createArticle: createArticleReducer,

  searchBar: searchBarMenuReducer,
};

export default reducer;
