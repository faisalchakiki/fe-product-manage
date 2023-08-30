import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApiProducts,deleteApiData,fetchDetailProducts,patchApiData,postApiData,fetchFilterCategory,fetchFilterSearch } from '../../actions/productActions'
// Define the async thunk to fetch data from the API
export const fetchListProducts = createAsyncThunk('api/fetchListProducts', async (page) => {
  return fetchApiProducts(page);
});
export const filterSearch = createAsyncThunk('api/filterSearch', async (search) => {
  return fetchFilterSearch(search);
});
export const filterCategory = createAsyncThunk('api/filterCategory', async (category) => {
  return fetchFilterCategory(category);
});
export const fetchDetail = createAsyncThunk('api/fetchDetailProduct', async (data) => {
  return fetchDetailProducts(data);
});

export const postData = createAsyncThunk('api/postData', async (data) => {
  return postApiData(data);
});

export const editData = createAsyncThunk('api/editData', async ({ id, payload }) => {
  return patchApiData(id, payload);
});

export const deleteData = createAsyncThunk('api/deleteData', async (id) => {
  return deleteApiData(id);
});

// Create the slice
const apiSlice = createSlice({
  name: 'products',
  initialState: {
    data: null,
    detail:null,
    isLoading: false,
    errorMessage: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListProducts.pending, (state) => {
        state.isLoading = true;
        state.data = null
      })
      .addCase(fetchListProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchListProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.error.message;
      })

      .addCase(filterCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(filterCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(filterCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.error.message;
      })

      .addCase(filterSearch.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(filterSearch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(filterSearch.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.error.message;
      })

      .addCase(postData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postData.fulfilled, (state) => {
        state.isLoading = false;
        // Perform any necessary actions after successful post
      })
      .addCase(postData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteData.fulfilled, (state) => {
        state.isLoading = false;
        // Perform any necessary actions after successful post
      })
      .addCase(deleteData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchDetail.pending, (state) => {
        state.isLoading = true;
        state.detail = null;
      })
      .addCase(fetchDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.detail = action.payload;
      })
      .addCase(fetchDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(editData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editData.fulfilled, (state) => {
        state.isLoading = true;
        // Perform any necessary actions after successful post
      })
      .addCase(editData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
  },
});

export default apiSlice.reducer;
