import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    loading: false,
    order: null,
    error: null,
    isUpdate: false,
  },
  reducers: {
    loadOrderRequest: (state) => {
      state.loading = true;
    },
    loadOrderSuccess: (state, action) => {
      state.loading = false;
      state.order = action.payload
    },
    loadOrderFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload
        state.order = null
    
      },
    updateOneOrder: (state , action) =>{
      state.order = action.payload
    },
    updateStatusOrder: (state , action) =>{
      state.order.status = action.payload
    }
  },
});

export const {
    loadOrderRequest,
    loadOrderSuccess,
    loadOrderFailure,
    updateOneOrder,
    updateStatusOrder
     
} = orderSlice.actions

export default orderSlice.reducer;
