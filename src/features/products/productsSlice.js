//  to make normalization method
import { createEntityAdapter } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const Products_URL = "";

const productsAdapter = createEntityAdapter({
  // i cant sort the the arry based on any thing i want not only on date
  sortComparer: (a, b) => b.date.localeCompare(a.date),
  // here i sorted the ids based on the date then i have a sorted ids it calls selectIds
  // so this selectIds has all products but it sorted
});

const initialState = productsAdapter.getInitialState({
  status: "idle", //'idle' | 'loading' | 'succeeded | 'failed'
  error: null,
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {},
});

export default productSlice.reducer;
