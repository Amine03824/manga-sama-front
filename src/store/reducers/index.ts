import articlesReducer from './article';
import categoriesReducer from './categories';
import loginFormReducer from './loginForm';
import signUpFormReducer from './signUpForm';
import mangaReducer from './manga';
import searchBarMenuReducer from './searchBarMenu';

const reducer = {
  article: articlesReducer,
  loginForm: loginFormReducer,
  signUpForm: signUpFormReducer,
  categories: categoriesReducer,
  manga: mangaReducer,
  searchBar: searchBarMenuReducer,
};

export default reducer;
