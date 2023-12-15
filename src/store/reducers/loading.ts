import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type LoadingState = {
  isLoading: boolean;
};

const initialState: LoadingState = {
  isLoading: false,
};

const LoadingReducer = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    changeIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { changeIsLoading } = LoadingReducer.actions;

export default LoadingReducer.reducer;
