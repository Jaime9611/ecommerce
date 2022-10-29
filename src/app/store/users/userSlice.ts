import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { login } from './user.action';
import { AuthStore, IUser } from './user.model';

const initialState: AuthStore = {
  token: '',
  user: {} as IUser,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: state => {
      state.token = '';
      state.user = {} as IUser;
    },
  },
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
    });
    builder.addCase(login.rejected, state => {
      state.loading = false;
    });
  },
});

export const UserState = (state: RootState) => state.user;
export default userSlice.reducer;
