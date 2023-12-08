import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { TArticle, TCreateArticleForm, TCreatedArticle } from '../../@types';

type CreateArticleState = {
  isLoading: boolean;
  error: null | string;
  credentials: {
    article_title: string;
    article_price: string;
    article_description: string;
  };
  article_condition: string;
  created_article: TCreatedArticle | null;
};

const initialState: CreateArticleState = {
  isLoading: false,
  error: null,
  credentials: {
    article_title: '',
    article_price: '',
    article_description: '',
  },
  article_condition: '',
  created_article: null,
};

export const createArticleFetch = createAsyncThunk(
  'article/create',
  async (credentials: TCreateArticleForm) => {
    const { data } = await axios.post(
      'http://localhost:3000/article',
      credentials
    );
    return data;
  }
);

export const associateMangaToArticle = createAsyncThunk(
  'article/associateManga',
  async (credentials: { article_id: number | undefined; isbn: number }) => {
    const { data } = await axios.post(
      `http://localhost:3000/associate/article/manga/${credentials.article_id}/${credentials.isbn}`
    );
    return data;
  }
);

const createArticleReducer = createSlice({
  name: 'createArticle',
  initialState,
  reducers: {
    changeCreateArticleInputValue(
      state,
      action: PayloadAction<{
        fieldName: keyof CreateArticleState['credentials'];
        value: string;
      }>
    ) {
      const { fieldName, value } = action.payload;
      state.credentials[fieldName] = value;
    },
    changeCreateArticleConditionValue(state, action: PayloadAction<string>) {
      state.article_condition = action.payload;
    },
    changeCreatedArticle(state, action: PayloadAction<TCreatedArticle>) {
      state.created_article = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(createArticleFetch.fulfilled, (state, action) => {
      state.created_article = action.payload;
    });
  },
});

export const {
  changeCreateArticleInputValue,
  changeCreateArticleConditionValue,
  changeCreatedArticle,
} = createArticleReducer.actions;

export default createArticleReducer.reducer;
