import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'me',
    initialState: {
        status: true,
        info: {
            id: '12321',
            fullname: 'Nguyen Minh vuong',
            phone: '0899306681'
        }
    }
})