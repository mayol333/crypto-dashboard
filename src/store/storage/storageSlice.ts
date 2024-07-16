import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { WalletItem } from "../../sections/TransactionSection/TransactionSection";

export interface StorageState {
    wallet: WalletItem[];
}

const initialState: StorageState = { wallet: [] };
const storageSlice = createSlice({
    name: "storage",
    initialState,
    reducers: {
        setStorage: (state, { payload }: PayloadAction<WalletItem>) => {
            state.wallet.push(payload);
            localStorage.setItem("wallet", JSON.stringify(state.wallet));
        },
        populateStorage: (state, { payload }: PayloadAction<WalletItem[]>) => {
            state.wallet = payload;
        },
        removeItem: (state, { payload }: PayloadAction<string>) => {
            state.wallet.filter(({ id }) => id !== payload);
            localStorage.removeItem("wallet");
        },
    },
});

export const { setStorage, populateStorage, removeItem } = storageSlice.actions;
export default storageSlice.reducer;
