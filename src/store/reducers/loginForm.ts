import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { redirect } from 'react-router-dom';
import { TUserArticle } from '../../@types';

type LoginFormState = {
  credentials: {
    email: string;
    password: string;
  };
  error: string;
  isLoading: boolean;
};

export const initialState: LoginFormState = {
  credentials: {
    email: 'hado78',
    password: 'test',
  },
  error: '',
  isLoading: false,
};

type LoginCredentials = {
  email: string;
  password: string;
};

export const loginUser = createAsyncThunk(
  'user/login',
  async (credentials: LoginCredentials) => {
    const { data } = await axios.post<{ user: TUserArticle; token: string }>(
      'http://localhost:3000/login',
      credentials
    );
    return data;
  }
);

const loginFormReducer = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    changeLoginFormInputsField(
      state,
      action: PayloadAction<{
        fieldName: keyof LoginFormState['credentials'];
        value: string;
      }>
    ) {
      const { fieldName, value } = action.payload;
      state.credentials[fieldName] = value;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Un problème est survenue lors de la connexion';
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.isLoading = false;
        redirect('/user');
      });
  },
});
export const { changeLoginFormInputsField } = loginFormReducer.actions;

export default loginFormReducer.reducer;
