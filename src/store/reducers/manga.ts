import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TManga } from '../../@types';
import axios from 'axios';

type MangaState = {
  manga: TManga | null;
  ISBNFormIsVisible: boolean;
  ISBNInputValue: string;
  isLoading: boolean;
  error: null | string;
};

const initialState: MangaState = {
  manga: null,
  ISBNFormIsVisible: true,
  ISBNInputValue: '',
  isLoading: false,
  error: null,
};

export const getMangaByISBN = createAsyncThunk(
  'manga/fetch',
  async (isbn: string) => {
    const { data } = await axios.get<TManga>(
      `http://localhost:3000/manga/${isbn}`
    );
    return data;
  }
);

const mangaReducer = createSlice({
  name: 'manga',
  initialState,
  reducers: {
    changeISBNFormIsVisible(state) {
      state.ISBNFormIsVisible = !state.ISBNFormIsVisible;
    },
    changeISBNInputValue(state, action: PayloadAction<string>) {
      state.ISBNInputValue = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getMangaByISBN.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMangaByISBN.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Problème rencontré lors de la récupération du manga';
        state.ISBNInputValue = '';
        state.ISBNFormIsVisible = true;
      })
      .addCase(getMangaByISBN.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ISBNInputValue = '';
        state.manga = action.payload;
      });
  },
});

export const { changeISBNFormIsVisible, changeISBNInputValue } =
  mangaReducer.actions;
export default mangaReducer.reducer;
