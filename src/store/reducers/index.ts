import articlesReducer from './article';
import categoriesReducer from './categories';
import loginFormReducer from './loginForm';
import signUpFormReducer from './signUpForm';

const reducer = {
  article: articlesReducer,
  loginForm: loginFormReducer,
  signUpForm: signUpFormReducer,
  categories: categoriesReducer,
};

export default reducer;
