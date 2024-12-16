import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../../services/auth.service';

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const response = await authService.login(data);
    return response;
  } catch (error) {
    //TODO log the error in sentry or some thridparty tool
    const message =
      (error?.response &&
        error?.response?.data &&
        error?.response?.data?.message) ||
      error?.message ||
      error?.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk(
  'auth/logout',
  async (data, thunkAPI) => {
    try {
      const response = await authService.logout();
      return response;
    } catch (error) {
      //TODO log the error in sentry or some thridparty tool
      const message =
        (error?.response &&
          error?.response?.data &&
          error?.response?.data?.message) ||
        error?.message ||
        error?.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
  success: false,
  logOutLoading: false,
  logOutError: null,
  logOutSuccess: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.userInfo = action.payload.data;
      state.loading = false;
      state.success = true;
    },
    [login.rejected]: (state, action) => {
      state.userInfo = {};
      state.loading = false;
      state.error = action.payload;
    },
    [logout.pending]: (state) => {
      state.logOutLoading = true;
    },
    [logout.fulfilled]: (state, action) => {
      state.userInfo = {};
      state.logOutSuccess = true;
      state.logOutLoading = false;
      state.success = false; // this is to not execute the useEffect in Login screen
    },
    [logout.rejected]: (state, action) => {
      state.logOutLoading = false;
      state.error = action.payload;
      state.logOutSuccess = false;
    },
  },
});

const { reducer } = authSlice;

export const authStateSelector = ({ auth }) => auth;

export default reducer;
