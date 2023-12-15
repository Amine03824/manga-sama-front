import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from '../../utils/axios';

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
  async (credentials: TransactionCredentials) => {
    const { data } = await axiosInstance.post('/transaction', credentials);
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
          'La transaction a échoué... Veuillez réessayer ou contacter le support';
      })
      .addCase(acceptTransaction.fulfilled, (state) => {
        state.isLoading = false;
        state.messageTransaction =
          "Félicitations ! Vous serez bientôt propriétaire d'un ou plusieurs nouveaux mangas !";
      });
  },
});

export default transactionReducer.reducer;
