/* eslint-disable import/no-named-as-default */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { Article, ArticleState, TCondition } from '../../@types';
import { axiosInstance } from '../../utils/axios';

const initialState: ArticleState = {
  list_condition: [],
  list_articles: [],
  error: null,
  isLoading: true,
  filteredArticles: [],
};

export const getArticles = createAsyncThunk('articles/fetch', async () => {
  const { data } = await axiosInstance.get<Article[]>('/article');

  return data;
});

export const getConditions = createAsyncThunk('condition/fetch', async () => {
  const { data } = await axiosInstance.get<TCondition[]>('/condition');
  return data;
});

const articleReducer = createSlice({
  name: 'article',
  initialState,
  reducers: {
    changeFilteredArticle(state, action: PayloadAction<Article[]>) {
      state.filteredArticles = action.payload;
    },
  },
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
      })
      .addCase(getConditions.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getConditions.rejected, (state) => {
        state.error =
          "Problème lors de la récupération des conditions d'article";
        state.isLoading = false;
      })
      .addCase(getConditions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list_condition = action.payload;
      });
  },
});

export const { changeFilteredArticle } = articleReducer.actions;
export default articleReducer.reducer;
