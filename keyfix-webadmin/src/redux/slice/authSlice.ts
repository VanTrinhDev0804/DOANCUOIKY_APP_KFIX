import { createSlice  } from "@reduxjs/toolkit"
import { IAdmin } from "../../types"


export interface AuthState {
    currentAdmin:  IAdmin[], 
    loading : boolean
}

const initialState : AuthState = {
    currentAdmin: [],
    loading: false
   
}   

const authSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
  
        addcurrentAdmin: ( state , action) => {
            state.currentAdmin = action.payload
        },
        // updateAdmin :(state, action) => {
        //     let index = state.userAdmin?.findIndex((ad) => {
        //         return ad.name === action.payload.name
        //     });
        //     state.userAdmin[index].password = action.payload.password
        // },
        loadAdminSuccess: (state , action) =>{
            state.loading = action.payload
        }
    }
})

export const { addcurrentAdmin , loadAdminSuccess} = authSlice.actions
export default  authSlice.reducer

