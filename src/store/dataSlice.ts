import { createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";
export interface DataState {
    dates: string[];
    rates: number[];
}
const initialState: DataState = { dates: [], rates: [] };
const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setDates: (state, { payload }) => {
            state.dates = payload;
        },
        setRates: (state, { payload }) => {
            state.rates = payload;
        },
        updateRates: (state) => {
            const lastRate = state.rates.at(-1) ?? 0;
            console.log({ lastRate });
            const difference = Math.floor(Math.random() * 101);
            const directionOfRate = Math.random() < 0.5 ? 1 : -1;
            const updatedLastRate =
                directionOfRate > 0
                    ? lastRate + difference
                    : lastRate - difference;
            state.rates = [...state.rates.slice(1), updatedLastRate];
        },
        updateDates: (state) => {
            const currentDate = new Date().getTime();
            state.dates = [
                ...state.dates.slice(1),
                format(currentDate, "dd:MM:yyyy - kk:mm:ss"),
            ];
        },
    },
});
export const { setDates, setRates, updateDates, updateRates } =
    dataSlice.actions;
export default dataSlice.reducer;
