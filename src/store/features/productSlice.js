import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addProductApi, getAllProductsApi } from '../../services/axiosService';

export const addProduct = createAsyncThunk(
  'product/addProduct',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await addProductApi(formData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllProducts = createAsyncThunk(
  'product/getAllProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllProductsApi();
      console.log("Response from getAllProducts:", response);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
        state.status = 'succeeded';
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

            // Handling getAllProducts
      .addCase(getAllProducts.pending, (state) => {
        state.status = 'loading';  // Set loading status when fetching products
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;  // Populate state with the fetched products
        state.status = 'succeeded';       // Set success status when products are fetched
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.status = 'failed';          // Set failed status if there's an error
        state.error = action.payload;     // Capture the error message
      });
  },
});

export default productSlice.reducer;
 