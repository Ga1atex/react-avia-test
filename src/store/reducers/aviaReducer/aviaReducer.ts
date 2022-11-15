import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  from: '',
  to: '',
  departureDate: '',
  dateBack: '',
};

export type AviaStateType = typeof initialState;

const aviaSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<AviaStateType>) => action.payload,
  },
});

export default aviaSlice.reducer;
export const aviaActionCreators = aviaSlice.actions;
