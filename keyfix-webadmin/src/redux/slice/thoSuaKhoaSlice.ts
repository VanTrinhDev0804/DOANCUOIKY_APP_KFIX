import { PayloadAction, createSlice  } from "@reduxjs/toolkit"
import { DataTypeThoSuaKhoa } from "../../types"



export interface ThoSuaKhoaState {
  dataThoSuaKhoa:  DataTypeThoSuaKhoa[], 
  searchValue: string
}

const initialState : ThoSuaKhoaState = {
    dataThoSuaKhoa :[],
    searchValue: ''
}   

const thoSuaKhoaSlice = createSlice({
    name: 'thoSuaKhoa',
    initialState,
    reducers: {
        loadDataThoSuaKhoa: ( state , action) => {
            state.dataThoSuaKhoa = action.payload
        },
        updateThoSuaKhoa :(state, action) => {
            let index = state.dataThoSuaKhoa?.findIndex((ad) => {
                return ad.id === action.payload.id
            });
            state.dataThoSuaKhoa[index] = action.payload
        },
        updateSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
    }
})

export const { loadDataThoSuaKhoa , updateThoSuaKhoa,updateSearchValue } = thoSuaKhoaSlice.actions
export default  thoSuaKhoaSlice.reducer

