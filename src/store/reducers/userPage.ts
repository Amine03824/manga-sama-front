/* eslint-disable import/prefer-default-export */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { TArticle, TUserArticle } from '../../@types';
import { axiosInstance } from '../../utils/axios';
import { LocalStorage } from '../../utils/LocalStorage';

type UserPageState = {
  userPageArticle: TArticle[];
  userPageInfo: TUserArticle;
  userId: string | null;
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
    const { data } = await axiosInstance.get<TArticle[]>(
      `/associate/user/${userId}/article`
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
        console.log(state.userPageArticle);
        LocalStorage.setItem('userArticle', action.payload);
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
