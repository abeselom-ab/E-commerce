import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addUserApi } from '../../services/axiosService';

export const addUser = createAsyncThunk (
'/user/addUser',
async (formData, {rejectWithValue }) => {
    try {
        const response = await addUserApi(formData);
        return response;    
    } catch (error) {
        return rejectWithValue(error.message);
    }
}
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        status: null,
        error: null,
      },
      reducers: {},
      extraReducers: (builder) => {
        builder
          .addCase(addUser.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(addUser.fulfilled, (state, action) => {
            state.users.push(action.payload);
            state.status = 'succeeded';
          })
          .addCase(addUser.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
          });
      },
});

export default userSlice.reducer;