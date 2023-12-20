import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { TUserConnected } from '../../@types';
import { axiosInstance } from '../../utils/axios';
import { LocalStorage } from '../../utils/LocalStorage';
import { changeIsLoading, setError, setInfo } from './loading';

type LoginFormState = {
  credentials: {
    email: string;
    password: string;
  };
  token: string;
  userIsConnected: boolean;
  user: TUserConnected | null;
};

export const initialState: LoginFormState = {
  credentials: {
    email: '',
    password: '',
  },
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
    try {
      thunkAPI.dispatch(changeIsLoading(true));
      const { data } = await axiosInstance.post<{
        user: TUserConnected;
        token: string;
      }>('/auth/login', credentials);
      LocalStorage.setItem('user', data.user);
      LocalStorage.setItem('token', data.token);

      thunkAPI.dispatch(changeIsLoading(false));
      thunkAPI.dispatch(setInfo('Tu es maintenant connecté ! '));
      return data;
    } catch (error) {
      thunkAPI.dispatch(changeIsLoading(false));
      thunkAPI.dispatch(setError('Mot de passe ou email incorrect'));
      throw error;
    }
  }
);

export const checkLogin = createAsyncThunk('user/check', async () => {
  const { data } = await axiosInstance.get('/auth/check');
  return data;
});

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
    changeUserisConnected(state, action: PayloadAction<boolean>) {
      state.userIsConnected = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.userIsConnected = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(checkLogin.rejected, (state, action) => {
        LocalStorage.removeItem();
        state.userIsConnected = false;
      });
  },
});
export const { changeLoginFormInputsField, changeUserisConnected } =
  loginFormReducer.actions;

export default loginFormReducer.reducer;
