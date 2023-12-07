import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

type SignUpFormState = {
  credentials: {
    pseudo: string;
    email: string;
    password: string;
    password_bis: string;
  };
  isLoading: boolean;
  error: string | null;
};

export const initialState: SignUpFormState = {
  credentials: {
    pseudo: 'YsT',
    email: 'tanguy.huart@oclock.school',
    password: 'coucou',
    password_bis: 'coucou',
  },
  isLoading: false,
  error: null,
};

type SignUpCredentials = {
  pseudo: string;
  email: string;
  password: string;
};

export const createUser = createAsyncThunk(
  'user/signUp',
  async (credentials: SignUpCredentials) => {
    const { data } = await axios.post<{ pseudo: string }>(
      'http://localhost:3000/user',
      credentials
    );
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
        state.error = null;
      })
      .addCase(createUser.rejected, (state) => {
        state.isLoading = false;
        state.error = ' Un problème est survenu lors de la création du compte';
      })
      .addCase(createUser.fulfilled, (state) => {
        state.isLoading = false;
      });
  },
});

export const { changeSignUpFormInputFields } = signUpFormReducer.actions;

export default signUpFormReducer.reducer;
