import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { axiosInstance } from '../../utils/axios';

type SignUpFormState = {
  credentials: {
    pseudo: string;
    email: string;
    password: string;
    password_bis: string;
  };
  isLoading: boolean;
  signUpError: string;
};

export const initialState: SignUpFormState = {
  credentials: {
    pseudo: 'YsT',
    email: 'tanguy.huart@oclock.school',
    password: 'coucou',
    password_bis: 'coucou',
  },
  isLoading: false,
  signUpError: '',
};

type SignUpCredentials = {
  pseudo: string;
  email: string;
  password: string;
};

export const createUser = createAsyncThunk(
  'user/signUp',
  async (credentials: SignUpCredentials) => {
    const { data } = await axiosInstance.post('/user', credentials);
    return data;
  }
);

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
  },
  extraReducers(builder) {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.signUpError = '';
      })
      .addCase(createUser.rejected, (state) => {
        state.isLoading = false;
        state.signUpError =
          ' Un problème est survenu lors de la création du compte';
      })
      .addCase(createUser.fulfilled, (state) => {
        state.isLoading = false;
      });
  },
});

export const { changeSignUpFormInputFields } = signUpFormReducer.actions;

export default signUpFormReducer.reducer;
