import styled from "styled-components";
import { WalletItem } from "../TransactionSection/TransactionSection";

const Container = styled.div``;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;

const ListElement = styled.li`
    display: flex;
    &:nth-child(odd) {
        background-color: ${({ theme }) => theme.colors.backgrounds.listOdd};
    }
    padding: 15px;
    justify-content: space-between;
`;

const Action = styled.p`
    width: 40px;
`;

const Currency = styled.p``;

const Amount = styled.p``;

const CryptoAmount = styled.p``;

const Date = styled.p``;

export const TransactionsHistorySection = () => {
    const transactions: [] = JSON.parse(localStorage.getItem("wallet") || "[]");
    console.log(transactions);
    return (
        <Container>
            <List>
                <ListElement>
                    <Action>Action</Action>
                    <Currency>Currency</Currency>
                    <Amount>Amount</Amount>
                    <CryptoAmount>CryptoAmount</CryptoAmount>
                    <Date>Date</Date>
                </ListElement>
                {transactions.map(
                    ({
                        action,
                        currency,
                        amount,
                        cryptoAmount,
                        date,
                    }: WalletItem) => {
                        return (
                            <ListElement>
                                <Action>{action}</Action>
                                <Currency>{currency}</Currency>
                                <Amount>{amount}</Amount>
                                <CryptoAmount>{cryptoAmount}</CryptoAmount>
                                <Date>{date}</Date>
                            </ListElement>
                        );
                    }
                )}
            </List>
        </Container>
    );
};
