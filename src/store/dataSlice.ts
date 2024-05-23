import { createSlice } from "@reduxjs/toolkit";
export interface DataState {
    dates: string[];
    rates: number[];
}
const initialState: DataState = { dates: [], rates: [] };
const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {},
});
export default dataSlice.reducer;
