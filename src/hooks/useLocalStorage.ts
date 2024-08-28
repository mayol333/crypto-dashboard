import { useEffect } from "react";
import { populateStorage } from "../store/storage/storageSlice";
import { useAppDispatch } from "../store/store";
import { WalletItem } from "../sections/TransactionSection/types";

export const useLocalStorage = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        const transactions: WalletItem[] = JSON.parse(
            localStorage.getItem("wallet") || "[]"
        );
        dispatch(populateStorage(transactions));
    }, [dispatch]);
};
