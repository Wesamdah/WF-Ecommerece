//  to make normalization method
import { createEntityAdapter } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const order_URL = "";

const orderAdapter = createEntityAdapter({
  // i cant sort the the arry based on any thing i want not only on date
  sortComparer: (a, b) => b.date.localeCompare(a.date),
  // here i sorted the ids based on the date then i have a sorted ids it calls selectIds
  // so this selectIds has all order but it sorted
});

const initialState = orderAdapter.getInitialState({
  status: "idle", //'idle' | 'loading' | 'succeeded | 'failed'
  error: null,
});

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers(builder) {},
});

export default orderSlice.reducer;
