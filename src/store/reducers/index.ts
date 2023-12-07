import articlesReducer from './article';
import categoriesReducer from './categories';
import loginFormReducer from './loginForm';
import signUpFormReducer from './signUpForm';
import mangaReducer from './manga';

const reducer = {
  article: articlesReducer,
  loginForm: loginFormReducer,
  signUpForm: signUpFormReducer,
  categories: categoriesReducer,
  manga: mangaReducer,
};

export default reducer;
