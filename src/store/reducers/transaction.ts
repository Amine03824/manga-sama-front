import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from '../../utils/axios';
import { changeIsLoading, setError } from './loading';

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
    try {
      thunkAPI.dispatch(changeIsLoading(true));
      const { data } = await axiosInstance.post('/transaction', credentials);
      thunkAPI.dispatch(changeIsLoading(false));
      return data;
    } catch (error) {
      thunkAPI.dispatch(changeIsLoading(false));
      thunkAPI.dispatch(setError('La transaction a échouée'));
      throw error;
    }
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
