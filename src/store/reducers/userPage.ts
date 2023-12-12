/* eslint-disable import/prefer-default-export */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { TArticle, TUserArticle } from '../../@types';

type UserPageState = {
  userPageArticle: TArticle[];
  userPageInfo: TUserArticle;
  userId: number | null;
  isLoading: boolean;
  messageUserPage: string;
  errorUserPage: string | null;
};

const initialState: UserPageState = {
  userPageArticle: [],
  userPageInfo: {
    id: 0,
    pseudo: '',
    city: '',
    created_at: '',
    updated_at: '',
  },
  userId: null,
  isLoading: false,
  messageUserPage: '',
  errorUserPage: null,
};

export const getArticleByUser = createAsyncThunk(
  'userArticle/fetch',
  async (userId: number) => {
    const { data } = await axios.get<TArticle[]>(
      `http://localhost:3000/article/user/${userId}`
    );
    return data;
  }
);

// export const getUserById = createAsyncThunk(
//   'userInfo/fetch',
//   async (userId: number) => {
//     const { data } = await axios.get<TUserArticle>(
//       `http://localhost:3000/user/${userId}`
//     );
//     return data;
//   }
// );

const userPageReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUserInfo(state, action: PayloadAction<TUserArticle>) {
      state.userPageInfo = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      // Gestion du fetch afin de recuperer les article selon le user
      .addCase(getArticleByUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getArticleByUser.rejected, (state) => {
        state.isLoading = true;
        state.errorUserPage = "Cet utilisateur n'a aucun article";
      })
      .addCase(getArticleByUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userPageArticle = action.payload;
      });
    // // gestion du fetch afin de recuperer un user par son id
    // .addCase(getUserById.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(getUserById.rejected, (state) => {
    //   state.isLoading = true;
    //   state.errorUserPage = ' Aucun utilisateur trouvé ';
    // })
    // .addCase(getUserById.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.userPageInfo = action.payload;
    // });
  },
});

export const { changeUserInfo } = userPageReducer.actions;
export default userPageReducer.reducer;
