import { Button } from "../../ui/Button/Button";
import { Select } from "../../ui/Select/Select";
import { Input } from "../../ui/Input/Input";
import { useAppSelector } from "../../store/store";
import { ChangeEvent, useState } from "react";
import {
    Wrapper,
    ButtonsContainer,
    MoneyInputContainer,
    CalculateValueInUSD,
} from "./styles";
import { format } from "date-fns";

export interface WalletItem {
    action: Action;
    currency: string;
    amount: string;
    cryptoAmount: string;
    date: string;
}

type Action = "buy" | "sell" | "send";

export const TransactionSection = () => {
    const { cryptoCurrencies } = useAppSelector(({ list }) => list);
    const options = cryptoCurrencies.map((currency) => {
        return { label: currency.currencyName, value: currency.currencyName };
    });
    const hasOptions = options.length > 0;
    const [select, setSelect] = useState("");
    const [input, setInput] = useState("");
    const [action, setAction] = useState<Action>("buy");
    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setInput(value);
    };
    const handleAction = (action: Action) => {
        setAction(action);
    };
    const rate = cryptoCurrencies.find(
        (currency) => currency.currencyName === select
    );
    const saveInLocalStorage = () => {
        const currentDate = new Date();
        const walletItem: WalletItem = {
            action: action,
            currency: select,
            amount: input,
            cryptoAmount: result.toFixed(2),
            date: format(currentDate, "dd:MM:yyyy"),
        };
        const wallet = JSON.parse(localStorage.getItem("wallet") || "[]");
        wallet.push(walletItem);
        localStorage.setItem("wallet", JSON.stringify(wallet));
    };

    const result = Number(input) / Number(rate?.rate.substring(1));
    const disabledCheck = !!select && !!input;
    return (
        <Wrapper>
            <ButtonsContainer>
                <Button
                    onClick={() => handleAction("buy")}
                    mode={action === "buy" ? "primary" : "secondary"}
                >
                    Buy
                </Button>
                <Button
                    onClick={() => handleAction("sell")}
                    mode={action === "sell" ? "primary" : "secondary"}
                >
                    Sell
                </Button>
                <Button
                    onClick={() => handleAction("send")}
                    mode={action === "send" ? "primary" : "secondary"}
                >
                    Send
                </Button>
            </ButtonsContainer>
            {hasOptions && (
                <Select
                    placeholder="Select Crypto"
                    onChange={(value) => setSelect(value.toString())}
                    options={options}
                    value={select}
                />
            )}
            <MoneyInputContainer>
                <p>$</p>
                <Input value={input} onChange={handleInput} />
                <CalculateValueInUSD>
                    {select && result.toFixed(2)} {select}
                </CalculateValueInUSD>
            </MoneyInputContainer>
            <Button onClick={saveInLocalStorage} disabled={!disabledCheck}>
                Process to Wallet
            </Button>
        </Wrapper>
    );
};
