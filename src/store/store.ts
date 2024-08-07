import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import dataReducer from "./data/dataSlice";
import listReducer from "./list/listSlice";
import storageReducer from "./storage/storageSlice";
export const store = configureStore({
    reducer: { data: dataReducer, list: listReducer, storage: storageReducer },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
