import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { TCreateArticleForm, TCreatedArticle } from '../../@types';

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
  article_condition: '1',
  created_article: null,
};

export const createArticleFetch = createAsyncThunk(
  'article/create',
  async (credentials: TCreateArticleForm) => {
    const { data } = await axios.post(
      'http://localhost:3000/article',
      credentials
    );
    console.log(data);

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

export const associateUserToArticle = createAsyncThunk(
  'article/associateUser',
  async (credentials: { user_id: number; article_id: number }) => {
    const { data } = await axios.post(
      `http://localhost:3000/associate/user/article/${credentials.user_id}/${credentials.article_id}`
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
    builder
      // Gestion du l'état de la requète associateManga
      .addCase(associateMangaToArticle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(associateMangaToArticle.rejected, (state) => {
        state.isLoading = false;
        state.error =
          "L'association du manga à l'article à rencontré un problème , réessaye s'il te plait";
      })
      // Gestion du l'état de la requète associateUser
      .addCase(associateUserToArticle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(associateUserToArticle.rejected, (state) => {
        state.isLoading = true;
        state.error =
          "Problème lors de l'association de l'article à ton compte user , réessaie s'il te plait";
      })

      // Gestion de l'état de la requête createArticleFetch
      .addCase(createArticleFetch.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createArticleFetch.rejected, (state) => {
        state.isLoading = false;
        state.error =
          "La création de l'article à rencontré un problème , réessaye s'il te plait";
      })
      .addCase(createArticleFetch.fulfilled, (state, action) => {
        state.created_article = action.payload.article;
      });
  },
});

export const {
  changeCreateArticleInputValue,
  changeCreateArticleConditionValue,
  changeCreatedArticle,
} = createArticleReducer.actions;

export default createArticleReducer.reducer;
