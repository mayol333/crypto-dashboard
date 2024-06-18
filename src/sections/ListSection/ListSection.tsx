import styled from "styled-components";
import { Icon } from "../../ui/Icon/Icon";
import { useEffect } from "react";
import { getInitialList } from "../../store/list/listThunk";
import { useAppDispatch, useAppSelector } from "../../store/store";

const Wrapper = styled.div`
    padding: 20px;
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow-y: auto;
    height: 750px;
`;

const ListElement = styled.li`
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:nth-child(odd) {
        background-color: ${({ theme }) => theme.colors.backgrounds.listOdd};
    }
    padding: 15px;
`;

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 15px;
`;

const CurrencyName = styled.p`
    font-weight: bold;
    width: 100px;
`;

const Rate = styled.p`
    width: 100px;
`;

const RateDirection = styled.div<{ $isRatePositive: boolean }>`
    display: flex;
    align-items: center;
    border: 2px solid
        ${({ theme, $isRatePositive }) =>
            $isRatePositive ? theme.colors.increase : theme.colors.decrease};
    border-radius: 20px;
    padding-inline: 5px;
    min-width: 70px;
`;

const RateChangeValue = styled.p`
    font-weight: bold;
`;
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
                            <ListElement>
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
