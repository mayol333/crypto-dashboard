import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { Button } from "../../ui/Button/Button";
import { removeItem } from "../../store/storage/storageSlice";

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
`;

const Action = styled.p`
    width: 20%;
`;

const Currency = styled.p`
    width: 20%;
`;

const Amount = styled.p`
    width: 20%;
`;

const CryptoAmount = styled.p`
    width: 20%;
`;

const Date = styled.p`
    width: 20%;
`;

const Bin = styled.img`
    width: 25px;
`;

export const TransactionsHistorySection = () => {
    const dispatch = useAppDispatch();
    const handleDelete = (id: string) => {
        dispatch(removeItem(id));
    };
    const { wallet } = useAppSelector(({ storage }) => storage);
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
                {wallet.map(
                    ({ action, currency, amount, cryptoAmount, date, id }) => {
                        return (
                            <ListElement key={id}>
                                <Action>{action}</Action>
                                <Currency>{currency}</Currency>
                                <Amount>{amount}</Amount>
                                <CryptoAmount>{cryptoAmount}</CryptoAmount>
                                <Date>{date}</Date>
                                <Button
                                    mode="secondary"
                                    onClick={() => handleDelete(id)}
                                >
                                    <Bin src="../../../public/images/bin.png.png"></Bin>
                                </Button>
                            </ListElement>
                        );
                    }
                )}
            </List>
        </Container>
    );
};
