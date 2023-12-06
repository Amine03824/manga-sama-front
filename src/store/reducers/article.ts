/* eslint-disable import/no-named-as-default */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Article, ArticleState } from '../../@types';
import articles from '../../data/data';

const initialState: ArticleState = {
  list_articles: articles,
  error: null,
  isLoading: true,
};

export const getArticles = createAsyncThunk('articles/fetch', async () => {
  const { data } = await axios.get<Article[]>('http://localhost:3001/article');

  return data;
});

const articleReducer = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getArticles.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getArticles.rejected, (state) => {
        state.error = 'Problème lors de la récupération des articles';
        state.isLoading = false;
      })
      .addCase(getArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list_articles = action.payload;
      });
  },
});

export default articleReducer.reducer;
