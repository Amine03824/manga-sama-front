/* eslint-disable import/no-named-as-default */
import { createSlice } from '@reduxjs/toolkit';
import { ArticleState } from '../../@types';
import data from '../../data/data';

const initialState: ArticleState = {
  articles: data,
  error: null,
  isLoading: true,
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
});

export default articleSlice.reducer;
