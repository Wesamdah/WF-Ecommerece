//  to make normalization method
import { createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../api/axiosClient";

const productsAdapter = createEntityAdapter({
  // i cant sort the the arry based on any thing i want not only on date

  // localeCompare is slower and not designed for comparing dates.
  // Subtracting Date objects is more efficient and straightforward for numerical comparisons.
  sortComparer: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  // here i sorted the ids based on the date then i have a sorted ids it calls selectIds
  // so this selectIds has all products but it sorted
});

const initialState = productsAdapter.getInitialState({
  status: "idle", //'idle' | 'loading' | 'succeeded | 'failed'
  error: null,
});

export const fetchAllProducts = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    try {
      const response = await axiosClient.get("/products");
      console.log("API Response :", response.data);
      return response.data.products;
    } catch (err) {
      console.error("API Error:", err.message);
      return err.message;
    }
  },
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log("Payload Received:", action.payload); // Debug the payload
        productsAdapter.setMany(state, action.payload); // Ensure payload matches expected structure
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      });
  },
});

export const getProductsStatus = (state) => state.products.status;
export const getProductsError = (state) => state.products.error;

export const {
  selectAll: selectAllProducts,
  selectIds: selectProductIds,
  selectById: selectProductById,
} = productsAdapter.getSelectors((state) => state.products);

export default productSlice.reducer;
