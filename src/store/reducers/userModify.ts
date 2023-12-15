import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { TUserConnected } from '../../@types';
import { axiosInstance } from '../../utils/axios';

type TUserFormModified = {
  id: number;
  firstName: string;
  lastName: string;
  pseudo: string;
  adress: string;
  zipCode: number;
  city: string;
  phoneNumber: number;
};

type UserModifyState = {
  isLoading: boolean;
  error: string;
  userInfo: TUserFormModified;
  credentials: UserCredentials;
};

const initialState: UserModifyState = {
  isLoading: false,
  error: '',
  userInfo: {
    id: 0,
    firstName: '',
    lastName: '',
    pseudo: '',
    adress: '',
    zipCode: 0,
    city: '',
    phoneNumber: 0,
  },
  credentials: {
    firstName: '',
    lastName: '',
    pseudo: '',
    adress: '',
    zipCode: '',
    city: '',
    phoneNumber: '',
  },
};

type UserCredentials = {
  firstName: string;
  lastName: string;
  pseudo: string;
  adress: string;
  zipCode: string;
  city: string;
  phoneNumber: string;
};

export const modifyUser = createAsyncThunk(
  'modifyUser/fetch',
  async (credentials: { userCredentials: UserCredentials; id: string }) => {
    const { data } = await axiosInstance.put<TUserFormModified>(
      `/users/${credentials.id}`,
      credentials.userCredentials
    );
    return data;
  }
);

const userModifyReducer = createSlice({
  name: 'userModify',
  initialState,
  reducers: {
    modifyInputUserInfo(
      state,
      action: PayloadAction<{
        fieldName: keyof UserCredentials;
        value: string | number;
      }>
    ) {
      const { fieldName, value } = action.payload;
      switch (fieldName) {
        case 'firstName':
          state.credentials.firstName = value as string;
          break;
        case 'lastName':
          state.credentials.lastName = value as string;
          break;
        case 'pseudo':
          state.credentials.pseudo = value as string;
          break;
        case 'adress':
          state.credentials.adress = value as string;
          break;
        case 'zipCode':
          state.credentials.zipCode = value as string;
          break;
        case 'city':
          state.credentials.city = value as string;
          break;
        case 'phoneNumber':
          state.credentials.phoneNumber = value as string;
          break;
        default:
          break;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(modifyUser.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(modifyUser.rejected, (state) => {
        state.isLoading = false;
        state.error =
          'Un problème est survenue lors de la modification des données';
      })
      .addCase(modifyUser.fulfilled, (state) => {
        state.isLoading = false;
      });
  },
});

export const { modifyInputUserInfo } = userModifyReducer.actions;
export default userModifyReducer.reducer;
