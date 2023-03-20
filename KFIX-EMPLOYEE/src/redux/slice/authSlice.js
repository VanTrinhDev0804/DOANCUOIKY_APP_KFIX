import { createSlice } from "@reduxjs/toolkit";

export const authkeyerSlice = createSlice({
  name: "authkeyer",
  initialState: {
    loading: false,
    isAuthenticated: false,
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
      state.user = action.payload.user;
      state.isVerify = action.payload.user.isVerify;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;

    },
    logoutUser: (state) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.isVerify = false;
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
    verifyOTPSuccess: (state , actions) => {
      state.loading = false;
      state.isVerify = true
      state.user.isVerify =true 
    },
    verifyOTPFailure: (state , actions) => {
      state.loading = false;
      state.isVerify = false
      state.error = actions.payload
    },
    clearErrResponse: (state , actions) => {
      state.error = null
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  verifyOTPSuccess,
  verifyOTPFailure,
  updateFailure,
  updateRequest,
  updateUserNameSuccess,
  updateAvatarSuccess,
  loginRequest,
  loginFailure,
  loginSuccess,
  logoutUser,
  clearErrResponse,
} = authkeyerSlice.actions;

export default authkeyerSlice.reducer;
