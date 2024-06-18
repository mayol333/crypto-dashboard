import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setList } from "./listSlice";

export const getInitialList = createAsyncThunk(
    "getInitialList",
    async (_, { dispatch }) => {
        try {
            const { data } = await axios.get("/initial_currencies");
            const { currencies } = data;
            dispatch(setList(currencies));
        } catch (error) {
            console.log(error);
        }
    }
);
