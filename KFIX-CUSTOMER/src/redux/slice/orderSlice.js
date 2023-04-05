import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    loading: false,
    value: null,
    error: null,
    isUpdate: false,
  },
  reducers: {
    loadOrderRequest: (state) => {
      state.loading = true;
    },
    loadOrderSuccess: (state, action) => {
      state.loading = false;
      state.value = action.payload
    },
    loadOrderFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload
    
      },
  },
});

export const {
    loadOrderRequest,
    loadOrderSuccess,
    loadOrderFailure,
     
} = orderSlice.actions

export default orderSlice.reducer;
