import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { data } from '../../views/app-views/Staff/staffData';

export const getStaffData = createAsyncThunk('staff/staffData', async () => {
  try {
    const response = await data;
    console.log('reducer', response);
    return response;
  } catch (error) {
    console.log(error);
    throw error; // re-throw the error to ensure the rejected action is dispatched
  }
});

const initialState = {
  staffDetailsData: {
    loading: true,
    error: '',
    staffDataInfo: [],
    success: false,
  },
};

const staffDataSlice = createSlice({
  name: 'staff',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getStaffData.pending, (state) => {
        state.staffDetailsData.loading = true;
      })
      .addCase(getStaffData.fulfilled, (state, action) => {
        state.staffDetailsData.staffDataInfo = action.payload;
        state.staffDetailsData.loading = false;
        state.staffDetailsData.success = true;
      })
      .addCase(getStaffData.rejected, (state, action) => {
        state.staffDetailsData.staffDataInfo = [];
        state.staffDetailsData.loading = false;
        state.staffDetailsData.error = action.error.message;
      });
  },
});

const { reducer } = staffDataSlice;

export const staffDataSelector = (state) => state.staff.staffDetailsData;

export default reducer;


