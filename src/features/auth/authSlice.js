import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// axios client
import axiosClient from "../../api/axiosClient";

// login user thunk
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post("/auth/login", credentials, {});
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

// register user thunk
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post("/auth/register", credentials);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

// logout user thunk
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  try {
    const response = await axiosClient.delete("/auth/logout", {});
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error.response?.data;
  }
});

//fetch current user thunk
export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async () => {
    try {
      const response = await axiosClient.get("/users/getCurrentUser");
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response?.data)
      return rejectWithValue(error.response?.data);
    }
  },
);

//verify email thunk
export const verifyEmail = createAsyncThunk("auth/verify-email", async (credentials, { rejectWithValue }) => {
  try {
    const response = await axiosClient.post('/auth/verify-email', credentials);
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error.response?.data)
    return rejectWithValue(error.response?.data)
  }
})

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.status = "idle";
      })
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "An error occurred.";
      })
      .addCase(verifyEmail.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(verifyEmail.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "An error occurred.";
      })
  },
});

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectAuthStatus = (state) => state.auth.status;
export const selectAuthError = (state) => state.auth.error;


