import { createSlice } from "@reduxjs/toolkit";
import { DataTypeFilter } from "../../types";

export interface FilterState {
    dataFilter: DataTypeFilter
}

const initialState: FilterState = {
    dataFilter: {
        date: "",
        month: "",
        year: ""
    }
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filter: (state,action) => {
            state.dataFilter = action.payload
        }
    }
})

export const { filter } = filterSlice.actions
export default filterSlice.reducer