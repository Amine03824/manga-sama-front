import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type LoginFormState = {
  credentials: {
    email: string;
    password: string;
  };
  error: null | string;
  isLoading: boolean;
};

export const initialState: LoginFormState = {
  credentials: {
    email: '',
    password: '',
  },
  error: null,
  isLoading: false,
};

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
});

export const { changeLoginFormInputsField } = loginFormReducer.actions;

export default loginFormReducer.reducer;
