import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from '../../utils/axios';
import { changeIsLoading } from './loading';

type TransactionState = {
  isLoading: boolean;
  error: string;
  messageTransaction: string;
};

const initialState: TransactionState = {
  isLoading: false,
  error: '',
  messageTransaction: '',
};

type TransactionCredentials = {
  buyerID: number;
  sellerID: number | undefined;
  articleID: number | undefined;
};

export const acceptTransaction = createAsyncThunk(
  'transaction/accepted',
  async (credentials: TransactionCredentials, thunkAPI) => {
    thunkAPI.dispatch(changeIsLoading(true));
    const { data } = await axiosInstance.post('/transaction', credentials);
    thunkAPI.dispatch(changeIsLoading(false));
    return data;
  }
);

const transactionReducer = createSlice({
  name: 'transaction',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(acceptTransaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(acceptTransaction.rejected, (state) => {
        state.isLoading = false;
        state.error =
          'La transaction à échouée... Veuillez réessayer ou contacter le support';
      })
      .addCase(acceptTransaction.fulfilled, (state) => {
        state.isLoading = false;
        state.messageTransaction =
          "Félicitation ! Vous serez bientôt proproiétéaire d'un ou plusieurs nouveaux Mangas!";
      });
  },
});

export default transactionReducer.reducer;
