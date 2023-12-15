/* eslint-disable import/no-named-as-default */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Article, TCondition } from '../../@types';
import { axiosInstance } from '../../utils/axios';
import { changeIsLoading } from './loading';

type ArticleState = {
  list_articles: Article[];
  list_condition: TCondition[];
  error: null | string;

  filteredArticles: Article[];
  viewedArticle: Article | null;
};

const initialState: ArticleState = {
  list_condition: [],
  list_articles: [],
  error: null,

  filteredArticles: [],
  viewedArticle: null,
};

export const getArticles = createAsyncThunk(
  'articles/fetch',
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(changeIsLoading(true));
      const { data } = await axiosInstance.get<Article[]>('/article');
      thunkAPI.dispatch(changeIsLoading(false));
      return data;
    } catch (error) {
      thunkAPI.dispatch(changeIsLoading(false));
      throw error;
    }
  }
);

export const getConditions = createAsyncThunk(
  'condition/fetch',
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(changeIsLoading(true));
      const { data } = await axiosInstance.get<TCondition[]>('/condition');
      thunkAPI.dispatch(changeIsLoading(false));
      return data;
    } catch (error) {
      thunkAPI.dispatch(changeIsLoading(false));
      throw error;
    }
  }
);

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
  },
  extraReducers(builder) {
    builder
      .addCase(getArticles.pending, (state) => {
        state.error = null;
      })
      .addCase(getArticles.rejected, (state) => {
        state.error = 'Problème lors de la récupération des articles';
      })
      .addCase(getArticles.fulfilled, (state, action) => {
        state.list_articles = action.payload;
      })
      .addCase(getConditions.pending, (state) => {
        state.error = null;
      })
      .addCase(getConditions.rejected, (state) => {
        state.error =
          "Problème lors de la récupération des conditions d'article";
      })
      .addCase(getConditions.fulfilled, (state, action) => {
        state.list_condition = action.payload;
      });
  },
});

export const { changeFilteredArticle, changeViewedArticle } =
  articleReducer.actions;
export default articleReducer.reducer;
