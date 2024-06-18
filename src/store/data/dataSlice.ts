import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";
import { Period } from "../../data/dates";
export interface DataState {
    dates: string[];
    rates: number[];
    period: Period;
}
const initialState: DataState = { dates: [], rates: [], period: "threeDays" };
const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setDates: (state, { payload }: PayloadAction<string[]>) => {
            state.dates = payload;
        },
        setRates: (state, { payload }: PayloadAction<number[]>) => {
            state.rates = payload;
        },
        updateRates: (state) => {
            const lastRate = state.rates.at(-1) ?? 0;
            const difference = Math.floor(Math.random() * 101);
            const directionOfRate = Math.random() < 0.5 ? 1 : -1;
            const updatedLastRate =
                directionOfRate > 0
                    ? lastRate + difference
                    : lastRate - difference;
            state.rates.push(updatedLastRate);
        },
        updateDates: (state) => {
            const currentDate = new Date().getTime();
            state.dates.push(format(currentDate, "dd:MM:yyyy - kk:mm:ss"));
        },
        removeFirst: (state) => {
            state.dates.shift();
            state.rates.shift();
        },
        setPeriod: (state, { payload }: PayloadAction<Period>) => {
            state.period = payload;
        },
    },
});

export const {
    setDates,
    setRates,
    updateDates,
    updateRates,
    removeFirst,
    setPeriod,
} = dataSlice.actions;
export default dataSlice.reducer;
