import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export interface ButtonState {
    active: boolean;
}
const initialState: ButtonState = { active: false };
const buttonSlice = createSlice({
    name: "button",
    initialState,
    reducers: {
        setActive: (state, { payload }: PayloadAction<boolean>) => {
            state.active = payload;
        },
    },
});
export const { setActive } = buttonSlice.actions;
export default buttonSlice.reducer;
