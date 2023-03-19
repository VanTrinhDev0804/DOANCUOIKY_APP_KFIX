import { configureStore } from "@reduxjs/toolkit";
import addressSlice from "../screens/MainScreen/SHome/addressSlice";
import meSlice from "../screens/SWelcome/meSlice";

const store = configureStore({
    reducer: {
        me: meSlice.reducer,
        address: addressSlice.reducer
    }
})

export default store