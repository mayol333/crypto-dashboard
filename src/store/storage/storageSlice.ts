import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { WalletItem } from "../../sections/TransactionSection/types";

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
            state.wallet = state.wallet.filter(({ id }) => id !== payload);
            const localStorageItems = localStorage.getItem("wallet") || "[]";
            const wallet: WalletItem[] = JSON.parse(localStorageItems);
            const updatedWallet = wallet.filter(({ id }) => id !== payload);
            localStorage.setItem("wallet", JSON.stringify(updatedWallet));
        },
    },
});

export const { setStorage, populateStorage, removeItem } = storageSlice.actions;
export default storageSlice.reducer;
