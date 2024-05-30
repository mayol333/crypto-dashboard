import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setDates, setRates } from "./dataSlice";

export const getInitialData = createAsyncThunk(
    "getInitialData",
    async (_, { dispatch }) => {
        try {
            const { data } = await axios.get("/initial_data");
            const { dates, rates } = data;
            dispatch(setDates(dates));
            dispatch(setRates(rates));
        } catch (error) {
            console.log(error);
        }
    }
);
