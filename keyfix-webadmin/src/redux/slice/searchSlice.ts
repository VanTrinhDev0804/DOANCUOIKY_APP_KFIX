import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThoSuaKhoaState {
  searchPhone: string;
}

const initialState: ThoSuaKhoaState = {
  searchPhone: '',
};

const thoSuaKhoaSlice = createSlice({
  name: 'searchPhone',
  initialState,
  reducers: {
    updateSearchPhone(state, action) {
      state.searchPhone = action.payload;
    },
  },
});

export const { updateSearchPhone } = thoSuaKhoaSlice.actions;

export default thoSuaKhoaSlice.reducer;
