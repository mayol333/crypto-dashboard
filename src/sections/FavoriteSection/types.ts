import { CryptoCurrency } from "../../store/list/listSlice";

export interface CryptoPanelProps {
    avatar: string;
    name: string;
    rate: string;
    handlePanelDelete: () => void;
}

export interface Panel {
    firstPanel: CryptoCurrency | null;
    secondPanel: CryptoCurrency | null;
    thirdPanel: CryptoCurrency | null;
    fourthPanel: CryptoCurrency | null;
}
