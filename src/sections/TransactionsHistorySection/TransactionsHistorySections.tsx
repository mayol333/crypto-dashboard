import { useAppDispatch, useAppSelector } from "../../store/store";
import { Button } from "../../ui/Button/Button";
import { removeItem } from "../../store/storage/storageSlice";
import {
    Container,
    ListElement,
    Action,
    Currency,
    Amount,
    CryptoAmount,
    Bin,
    List,
    Date,
} from "./styles";

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
