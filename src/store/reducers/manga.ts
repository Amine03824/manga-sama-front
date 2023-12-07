import { createSlice } from '@reduxjs/toolkit';
import { TManga } from '../../@types';

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

const mangaReducer = createSlice({
  name: 'manga',
  initialState,
  reducers: {
    changeISBNFormIsVisible(state) {
      state.ISBNFormIsVisible = !state.ISBNFormIsVisible;
    },
  },
});

export const { changeISBNFormIsVisible } = mangaReducer.actions;
export default mangaReducer.reducer;
