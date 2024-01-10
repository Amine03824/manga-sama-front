import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { axiosInstance } from '../../utils/axios';
import { changeIsLoading, setError, setInfo } from './loading';

type SignUpFormState = {
  credentials: {
    pseudo: string;
    email: string;
    password: string;
    password_bis: string;
  };
  loadingPseudo: boolean;
  pseudoNotDisp: boolean;
};

export const initialState: SignUpFormState = {
  credentials: {
    pseudo: '',
    email: '',
    password: '',
    password_bis: '',
  },
  loadingPseudo: false,
  pseudoNotDisp: false,
};

type SignUpCredentials = {
  pseudo: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export const createUser = createAsyncThunk(
  'user/signUp',
  async (credentials: SignUpCredentials, thunkAPI) => {
    try {
      thunkAPI.dispatch(changeIsLoading(true));
      const { data } = await axiosInstance.post('/user', credentials);
      thunkAPI.dispatch(
        setInfo('Le compte a bien été crée ! Connectes-toi maintenant :) ')
      );
      thunkAPI.dispatch(changeIsLoading(false));
      return data;
    } catch (error) {
      thunkAPI.dispatch(changeIsLoading(false));
      thunkAPI.dispatch(setError("Le compte utilisateur n'a pas pu être crée"));
      throw error;
    }
  }
);

export const findUser = createAsyncThunk('user/findUser', async () => {
  const { data } = await axiosInstance.get('/user');
  return data;
});

const signUpFormReducer = createSlice({
  name: 'signupForm',
  initialState,
  reducers: {
    changeSignUpFormInputFields(
      state,
      action: PayloadAction<{
        fieldName: keyof SignUpFormState['credentials'];
        value: string;
      }>
    ) {
      const { fieldName, value } = action.payload;
      state.credentials[fieldName] = value;
    },
    resetForm(state) {
      state.credentials.pseudo = '';
      state.credentials.email = '';
      state.credentials.password = '';
      state.credentials.password_bis = '';
      state.loadingPseudo = false;
      state.pseudoNotDisp = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(createUser.fulfilled, (state) => {
      state.credentials.email = '';
      state.credentials.password = '';
      state.credentials.password_bis = '';
      state.credentials.pseudo = '';
    });
    builder
      .addCase(findUser.pending, (state) => {
        state.loadingPseudo = true;
        state.pseudoNotDisp = false;
      })
      .addCase(findUser.fulfilled, (state, action) => {
        state.loadingPseudo = false;
        const findedPseudo = action.payload.find(
          (user: { pseudo: string }) => user.pseudo === state.credentials.pseudo
        );
        if (findedPseudo) {
          state.pseudoNotDisp = true;
        }
      });
  },
});

export const { changeSignUpFormInputFields, resetForm } =
  signUpFormReducer.actions;

export default signUpFormReducer.reducer;
