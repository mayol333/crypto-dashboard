import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CryptoCurrency {
    avatar: string;
    currencyName: string;
    rate: string;
    isRatePositive: boolean;
    rateChangeValue: string;
}

export interface ListState {
    cryptoCurrencies: CryptoCurrency[];
}

const initialState: ListState = { cryptoCurrencies: [] };
const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        setList: (state, { payload }: PayloadAction<CryptoCurrency[]>) => {
            state.cryptoCurrencies = payload;
        },
    },
});

export const { setList } = listSlice.actions;
export default listSlice.reducer;
