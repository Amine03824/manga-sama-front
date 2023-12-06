/* eslint-disable import/no-named-as-default */
import { createSlice } from '@reduxjs/toolkit';
import { ArticleState } from '../../@types';
import mangas from '../../data/mangas';

const initialState: ArticleState = {
  articles: mangas,
  error: null,
  isLoading: true,
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
});

export default articleSlice.reducer;
