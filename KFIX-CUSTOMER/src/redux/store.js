
import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/authSlice'
import orderSlice from './slice/orderSlice';
import keyerSlice from './slice/keyerSlice';

const store = configureStore({
  reducer: {
    auth : authSlice,
    order : orderSlice,
    keyer: keyerSlice
  },
})

// import { configureStore } from "@reduxjs/toolkit";
// import { authReducer, messageReducer } from "./reducer";
// import logger from 'redux-logger'
// import thunk from "redux-thunk";



// const store = configureStore({
//   reducer: {
//     auth: authReducer,

//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
// },

// );

export default store;
