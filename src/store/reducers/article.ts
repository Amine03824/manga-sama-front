/* eslint-disable import/no-named-as-default */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Article, TCondition } from '../../@types';
import { axiosInstance } from '../../utils/axios';
import { changeIsLoading, setError } from './loading';

type ArticleState = {
  list_articles: Article[];
  list_condition: TCondition[];

  filteredArticles: Article[];
  viewedArticle: Article | null;
};

const initialState: ArticleState = {
  list_condition: [],
  list_articles: [],

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
      setError('Un problème est survenu lors de la récupération des données');
      throw error;
    }
  }
);

export const getConditions = createAsyncThunk(
  'condition/fetch',
  async (_, thunkAPI) => {
    // try {
    thunkAPI.dispatch(changeIsLoading(true));
    const { data } = await axiosInstance.get<TCondition[]>('/condition');
    thunkAPI.dispatch(changeIsLoading(false));
    return data;
    // } catch (error) {
    //   thunkAPI.dispatch(changeIsLoading(false));
    //   thunkAPI.dispatch(
    //     setError('Un problème est survenu lors de la récupération des données')
    //   );
    //   return error;
    // }
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

      .addCase(getArticles.fulfilled, (state, action) => {
        state.list_articles = action.payload;
      })

      .addCase(getConditions.fulfilled, (state, action) => {
        state.list_condition = action.payload;
      });
  },
});

export const { changeFilteredArticle, changeViewedArticle } =
  articleReducer.actions;
export default articleReducer.reducer;
