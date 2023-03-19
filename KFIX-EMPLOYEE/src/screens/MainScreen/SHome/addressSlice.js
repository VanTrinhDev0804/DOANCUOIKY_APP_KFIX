import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'address',
    initialState: {
        address: 'Nguyen Van Bao Ha Noi',
        coordinates: {
            latitude: 10.822833332545295,
            longitude: 106.68774662221384
        }
    }
})