import { createSlice  } from "@reduxjs/toolkit"
import {  IThongKe } from "../../types"


export interface ThongKeState {
    dataThongke:  IThongKe[], 
    loading : boolean
}

const initialState : ThongKeState = {
    dataThongke: [],
    loading: false
   
}   

const ThongkeSlice = createSlice({
    name: 'thongke',
    initialState,
    reducers: {
  
        loaddataThongKe: ( state , action) => {
            state.dataThongke = action.payload
        },
        // updateAdmin :(state, action) => {
        //     let index = state.userAdmin?.findIndex((ad) => {
        //         return ad.name === action.payload.name
        //     });
        //     state.userAdmin[index].password = action.payload.password
        // },
        loaddataFalius: (state , action) =>{
            state.dataThongke = []
        }
    }
})

export const { loaddataThongKe , loaddataFalius} = ThongkeSlice.actions
export default  ThongkeSlice.reducer

