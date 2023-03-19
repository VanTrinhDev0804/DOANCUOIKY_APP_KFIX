import { createSlice  } from "@reduxjs/toolkit"
import { DataTypeThoSuaKhoa } from "../../types"



export interface ThoSuaKhoaState {

  dataThoSuaKhoa:  DataTypeThoSuaKhoa[], 


}

const initialState : ThoSuaKhoaState = {
    dataThoSuaKhoa :[]
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
      
    }
})

export const { loadDataThoSuaKhoa , updateThoSuaKhoa } = thoSuaKhoaSlice.actions
export default  thoSuaKhoaSlice.reducer

