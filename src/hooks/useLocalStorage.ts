import { useEffect } from "react";
import { WalletItem } from "../sections/TransactionSection/TransactionSection";
import { populateStorage } from "../store/storage/storageSlice";
import { useAppDispatch } from "../store/store";

export const useLocalStorage = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        const transactions: WalletItem[] = JSON.parse(
            localStorage.getItem("wallet") || "[]"
        );
        dispatch(populateStorage(transactions));
    }, [dispatch]);
};
