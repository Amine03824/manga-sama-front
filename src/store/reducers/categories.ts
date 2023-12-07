import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { TCategory } from '../../@types';

type CategoriesState = {
  list_categories: TCategory[];
  error: string | null;
  isLoading: boolean;
};

const initialState: CategoriesState = {
  list_categories: [],
  error: null,
  isLoading: true,
};

export const getCategories = createAsyncThunk('categories/fetch', async () => {
  const { data } = await axios.get<TCategory[]>(
    'http://localhost:3000/category'
  );
  return data;
});

const categoriesReducer = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCategories.rejected, (state) => {
        state.error = 'Problème lors de la récupération des articles';
        state.isLoading = false;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list_categories = action.payload;
      });
  },
});

export default categoriesReducer.reducer;
