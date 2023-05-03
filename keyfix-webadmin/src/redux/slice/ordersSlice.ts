import { createSlice  } from "@reduxjs/toolkit"
import { DataTypeThoSuaKhoa } from "../../types"



export interface OrdersState {
  dataOrders:  [], 
}

const initialState : OrdersState = {
    dataOrders :[]
}   

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        loadDataOrders: ( state , action) => {
            state.dataOrders = action.payload
        },
    }
})

export const { loadDataOrders } = ordersSlice.actions
export default  ordersSlice.reducer
