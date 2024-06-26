import styled from "styled-components";
import { Button } from "../../ui/Button/Button";
import { Select } from "../../ui/Select/Select";
import { Input } from "../../ui/Input/Input";
import { useAppSelector } from "../../store/store";
import { ChangeEvent, useState } from "react";

const Wrapper = styled.div`
    display: flex;
    gap: 30px;
    flex-direction: column;
    padding: 20px;
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const CalculateValueInUSD = styled.p``;

const MoneyInputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TransactionSection = () => {
    const { cryptoCurrencies } = useAppSelector(({ list }) => list);
    const options = cryptoCurrencies.map((currency) => {
        return { label: currency.currencyName, value: currency.currencyName };
    });
    const hasOptions = options.length > 0;
    const [select, setSelect] = useState("");
    const [input, setInput] = useState("");
    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setInput(value);
    };
    const rate = cryptoCurrencies.find(
        (currency) => currency.currencyName === select
    );
    const result = Number(input) / Number(rate?.rate.substring(1));
    return (
        <Wrapper>
            <ButtonsContainer>
                <Button>Buy</Button>
                <Button>Sell</Button>
                <Button>Send</Button>
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
                    {result.toFixed(2)} {select}
                </CalculateValueInUSD>
            </MoneyInputContainer>
            <Button>Process to Wallet</Button>
        </Wrapper>
    );
};
