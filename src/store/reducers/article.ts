/* eslint-disable import/no-named-as-default */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { Article, TCondition } from '../../@types';
import { axiosInstance } from '../../utils/axios';

type ArticleState = {
  list_articles: Article[];
  list_condition: TCondition[];
  error: null | string;
  isLoading: boolean;
  filteredArticles: Article[];
  viewedArticle: Article | null;
};

const initialState: ArticleState = {
  list_condition: [],
  list_articles: [],
  error: null,
  isLoading: true,
  filteredArticles: [],
  viewedArticle: null,
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
    changeViewedArticle(state, action: PayloadAction<Article>) {
      state.viewedArticle = action.payload;
    },
    changeIsLoadingState(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
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

export const { changeFilteredArticle, changeViewedArticle } =
  articleReducer.actions;
export default articleReducer.reducer;
