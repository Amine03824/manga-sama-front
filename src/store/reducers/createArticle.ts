import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { TCreateArticleForm, TCreatedArticle } from '../../@types';

// CreateArticleSlice est le typage du rayon "createArticle", on prends les même champs que le initialState et on type chaque champs
type CreateArticleState = {
  isLoading: boolean;
  error: string;
  message: string;
  credentials: {
    article_title: string;
    article_price: string;
    article_description: string;
  };
  article_condition: string;
  created_article: TCreatedArticle | null;
};

// Voici les valeurs initiales du "rayon" createArticle dans le store

const initialState: CreateArticleState = {
  isLoading: false,
  error: '',
  message: '',
  // credentials sont les champs inputs controlés du formulaire de creation d'aricle
  credentials: {
    article_title: '',
    article_price: '',
    article_description: '',
  },
  // article_condition est la valeur de l'input select pour choisir la condition de l'aricle
  article_condition: '1',
  // created_article est la valeur de retour de l'APi une fois que l'article à été crée, permet de l'utiliser pour pouvoir faire les associations nécéssaire ensuite.
  created_article: null,
};

// Fonction asynchrone via redux et axios qui fait une demande a l'API , en post , pour soumettre le formulaire de création d'article afin de créer un article dans la base de donnée
// il prend en argument un credential qui est un objet contenant les champs du formulaire de creation
export const createArticleFetch = createAsyncThunk(
  'article/create',
  async (credentials: TCreateArticleForm) => {
    const { data } = await axios.post(
      'http://amine03824-server.eddi.cloud:3000/article',
      credentials
    );

    return data;
  }
);

// Fonction asynchrone via axios qui fait une demande à l'API afin d'associer l'article nouvellement crée au manga qui ont été rentrés via code isbn lors de sa création.
// il prend en argument un credentials , qui est un objet contenant l'id de l'article qui vient d'etre crée, ainsi que l'isbn du manga que l'on veut associer
export const associateMangaToArticle = createAsyncThunk(
  'article/associateManga',
  async (credentials: { article_id: number | undefined; isbn: number }) => {
    const { data } = await axios.post(
      `http://amine03824-server.eddi.cloud:3000/associate/article/manga/${credentials.article_id}/${credentials.isbn}`
    );
    return data;
  }
);

// Fonction asynchrone via axios qui fait une demande à l'API afin d'associer l'article nouvellement crée a un user
// il prend en argument un credential qui est un objet contenant l'id du user et l'id de l'article crée
export const associateUserToArticle = createAsyncThunk(
  'article/associateUser',
  async (credentials: { user_id: number; article_id: number }) => {
    const { data } = await axios.post(
      `http://amine03824-server.eddi.cloud:3000/associate/user/article/${credentials.user_id}/${credentials.article_id}`
    );
    return data;
  }
);

// CreateArticleReducer est le reducer qui gère toutes les données relatives a la création d'un article
const createArticleReducer = createSlice({
  name: 'createArticle',
  initialState,
  reducers: {
    // cette fonction du reducer permet de gérer les inputs controlé de tous les champs du formulaire de création d'article
    // il prend en argument un payload qui est un objet contenant le nom de l'input qui est changé et sa valeur
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
    // cette fonction du reducer permet de gérer la valeur de la condition dans le store
    changeCreateArticleConditionValue(state, action: PayloadAction<string>) {
      state.article_condition = action.payload;
    },
    // cette fonction du reducer permet de gérer la valeur de created_article dans le store
    changeCreatedArticle(state, action: PayloadAction<TCreatedArticle>) {
      state.created_article = action.payload;
    },
    changeCreateArticleMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
    changeCreateArticleErrorMessage(state, action: PayloadAction<string>) {
      state.error = action.payload;
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

// export de toutes les fonctions du reducer
export const {
  changeCreateArticleInputValue,
  changeCreateArticleConditionValue,
  changeCreatedArticle,
  changeCreateArticleMessage,
  changeCreateArticleErrorMessage,
} = createArticleReducer.actions;

// export du reducer
export default createArticleReducer.reducer;
