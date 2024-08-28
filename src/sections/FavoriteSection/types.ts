import { CryptoCurrency } from "../../store/list/listSlice";

export interface Panel {
    firstPanel: CryptoCurrency | null;
    secondPanel: CryptoCurrency | null;
    thirdPanel: CryptoCurrency | null;
    fourthPanel: CryptoCurrency | null;
}
