import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/authSlice'
import thoSuaKhoaSlice from './slice/thoSuaKhoaSlice'
import filterSlice from './slice/filterSlice'
import ordersSlice from './slice/ordersSlice'
import searchSlice from './slice/searchSlice'
import thongkeSlice from './slice/thongkeSlice'

// ...

export const store = configureStore({
  reducer: {
    admin: authSlice,
    thoSuaKhoa : thoSuaKhoaSlice,
    filter: filterSlice,
    orders: ordersSlice,
    search: searchSlice,
    thongke : thongkeSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch