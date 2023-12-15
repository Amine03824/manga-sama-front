import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { TManga } from '../../@types';
import { axiosInstance } from '../../utils/axios';
import { changeIsLoading } from './loading';

type MangaState = {
  manga: TManga[];
  ISBNFormIsVisible: boolean;
  ISBNInputValue: string;

  error: null | string;
};

const initialState: MangaState = {
  manga: [],
  ISBNFormIsVisible: true,
  ISBNInputValue: '',
  error: null,
};

export const getMangaByISBN = createAsyncThunk(
  'manga/fetch',
  async (isbn: string, thunkAPI) => {
    thunkAPI.dispatch(changeIsLoading(true));
    const { data } = await axiosInstance.get<TManga>(`/manga/${isbn}`);
    thunkAPI.dispatch(changeIsLoading(false));
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
    resetMangaState(state) {
      state.manga = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getMangaByISBN.pending, () => {})
      .addCase(getMangaByISBN.rejected, (state) => {
        state.error = 'Problème rencontré lors de la récupération du manga';
        state.ISBNInputValue = '';
        state.ISBNFormIsVisible = true;
      })
      .addCase(getMangaByISBN.fulfilled, (state, action) => {
        state.error = '';
        state.ISBNInputValue = '';
        state.ISBNFormIsVisible = false;
        state.manga.push(action.payload);
      });
  },
});

export const {
  changeISBNFormIsVisible,
  changeISBNInputValue,
  resetMangaState,
} = mangaReducer.actions;
export default mangaReducer.reducer;
