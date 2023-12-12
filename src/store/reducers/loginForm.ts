import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { redirect } from 'react-router-dom';
import { TUserConnected } from '../../@types';
import { axiosInstance } from '../../utils/axios';
import { LocalStorage } from '../../utils/LocalStorage';

type LoginFormState = {
  credentials: {
    email: string;
    password: string;
  };
  error: string;
  isLoading: boolean;
  token: string;
  userIsConnected: boolean;
  user: TUserConnected | null;
};

export const initialState: LoginFormState = {
  credentials: {
    email: 'hado78',
    password: 'test',
  },
  error: '',
  isLoading: false,
  token: '',
  userIsConnected: false,
  user: null,
};

type LoginCredentials = {
  email: string;
  password: string;
};

export const loginUser = createAsyncThunk(
  'user/login',
  async (credentials: LoginCredentials) => {
    const { data } = await axiosInstance.post<{
      user: TUserConnected;
      token: string;
    }>('/login', credentials);
    LocalStorage.setItem('user', data);
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
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userIsConnected = true;
        state.token = action.payload.token;
        state.user = action.payload.user;

        redirect('/user');
      });
  },
});
export const { changeLoginFormInputsField } = loginFormReducer.actions;

export default loginFormReducer.reducer;
