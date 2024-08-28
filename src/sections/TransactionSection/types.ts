export interface WalletItem {
    action: Action;
    currency: string;
    amount: string;
    cryptoAmount: string;
    date: string;
    id: string;
}

export type Action = "buy" | "sell" | "send";
