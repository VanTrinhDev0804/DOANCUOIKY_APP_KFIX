import { configureStore } from "@reduxjs/toolkit";
import addressSlice from "../screens/MainScreen/SHome/addressSlice";
import meSlice from "../screens/SWelcome/meSlice";
import authSlice, { authkeyerSlice } from "./slice/authSlice";

const store = configureStore({
    reducer: {
        me: meSlice.reducer,
        address: addressSlice.reducer,
        auth : authSlice
    }
})

export default store