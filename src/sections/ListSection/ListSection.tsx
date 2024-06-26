import { Icon } from "../../ui/Icon/Icon";
import { useEffect } from "react";
import { getInitialList } from "../../store/list/listThunk";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
    Wrapper,
    ListElement,
    Avatar,
    List,
    CurrencyName,
    Rate,
    RateDirection,
    RateChangeValue,
} from "./styles";

export const ListSection = () => {
    const dispatch = useAppDispatch();
    const { cryptoCurrencies } = useAppSelector(({ list }) => list);
    useEffect(() => {
        dispatch(getInitialList());
    }, [dispatch]);

    return (
        <Wrapper>
            <List>
                {cryptoCurrencies.map(
                    ({
                        avatar,
                        currencyName,
                        rate,
                        isRatePositive,
                        rateChangeValue,
                    }) => {
                        return (
                            <ListElement key={currencyName}>
                                <Avatar src={avatar} alt="" />
                                <CurrencyName>{currencyName}</CurrencyName>
                                <Rate>{rate}</Rate>
                                <RateDirection $isRatePositive={isRatePositive}>
                                    <Icon
                                        type={
                                            isRatePositive
                                                ? "upArrow"
                                                : "downArrow"
                                        }
                                    />
                                    <RateChangeValue>
                                        {rateChangeValue}
                                    </RateChangeValue>
                                </RateDirection>
                            </ListElement>
                        );
                    }
                )}
            </List>
        </Wrapper>
    );
};
