import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { TUserConnected } from '../../@types';
import { axiosInstance } from '../../utils/axios';
import { LocalStorage } from '../../utils/LocalStorage';
import { changeIsLoading } from './loading';

type LoginFormState = {
  credentials: {
    email: string;
    password: string;
  };
  error: string;
  isLoading: boolean;
  token: string;
  messageLoginPage: string;
  userIsConnected: boolean;
  user: TUserConnected | null;
};

export const initialState: LoginFormState = {
  credentials: {
    email: '',
    password: '',
  },
  error: '',
  messageLoginPage: '',
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
  async (credentials: LoginCredentials, thunkAPI) => {
    thunkAPI.dispatch(changeIsLoading(true));
    const { data } = await axiosInstance.post<{
      user: TUserConnected;
      token: string;
    }>('/auth/login', credentials);
    LocalStorage.setItem('user', data);
    thunkAPI.dispatch(changeIsLoading(false));
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
    changeUserisConnectedToTrue(state, action: PayloadAction<boolean>) {
      state.userIsConnected = action.payload;
    },
    changeMessageLoginPage(state, action: PayloadAction<string>) {
      state.messageLoginPage = action.payload;
    },
    changeErrorLoginPage(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.error = '';
      })
      .addCase(loginUser.rejected, (state) => {
        state.error = 'Mot de passe ou email incorrect';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.userIsConnected = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      });
  },
});
export const {
  changeLoginFormInputsField,
  changeUserisConnectedToTrue,
  changeMessageLoginPage,
  changeErrorLoginPage,
} = loginFormReducer.actions;

export default loginFormReducer.reducer;
