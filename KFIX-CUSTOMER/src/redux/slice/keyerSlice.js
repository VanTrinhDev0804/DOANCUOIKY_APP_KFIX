import { createSlice } from "@reduxjs/toolkit";

export const keyerSlice = createSlice({
  name: "keyer",
  initialState: {
    loading: false,
    value: null,
    error: null,
    isUpdate: false,
  },
  reducers: {
    loadKeyerRequest: (state) => {
      state.loading = true;
      // state.value = null;
    },
    loadKeyerSuccess: (state, action) => {
      state.loading = false;
      state.value = action.payload
    },
    loadKeyerFailure: (state, action) => {
        state.loading = false;
        state.value = null;
        state.error = action.payload
    
      },
  },
});

export const {
   loadKeyerRequest,
   loadKeyerSuccess,
   loadKeyerFailure
     
} = keyerSlice.actions

export default keyerSlice.reducer;
