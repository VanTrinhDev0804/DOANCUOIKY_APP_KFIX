import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    isAuthenticated: false,
    isRegister: false,
    user: null,
    isVerify: false,
    error: null,
    isUpdate: false,
  },
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.isRegister = false;
      state.user = action.payload.user;
      state.isVerify = action.payload.user.isVerify;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
      state.isRegister = false;
    },

    registerRequest: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.isRegister = true;
      state.user = action.payload;
      state.isVerify = action.payload.user.isVerify;
      state.error = null;
    },
    registerFailure: (state, action) => {
      state.loading = false;
      state.isRegister = false;
      state.error = action.payload;
    },
    logoutUser: (state) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.isVerify = false;
      state.isRegister = false;
    },
    updateRequest: (state) => {
      state.loading = true;
    
    },
    updateAvatarSuccess: (state , actions) => {
      state.loading = false;
      state.user.avatar = actions.payload
      state.isUpdate =true
    },
    updateUserNameSuccess: (state , actions) => {
      state.loading = false;
      state.user.username = actions.payload
    },
    updateFailure: (state , actions) => {
      state.loading = false;
      state.error = actions.payload
      state.isUpdate =false
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateFailure,
  updateRequest,
  updateUserNameSuccess,
  updateAvatarSuccess,
  registerFailure,
  registerRequest,
  registerSuccess,
  loginRequest,
  loginFailure,
  loginSuccess,
  logoutUser,
} = authSlice.actions;

export default authSlice.reducer;
