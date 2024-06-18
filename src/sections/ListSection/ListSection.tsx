import styled from "styled-components";
import { Icon } from "../../ui/Icon/Icon";

const Wrapper = styled.div``;

const List = styled.ul``;

const ListElement = styled.li`
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 15px;
`;

const CurrencyName = styled.p`
    font-weight: bold;
`;

const Rate = styled.p``;

const RateDirection = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid ${({ theme }) => theme.colors.increase};
    border-radius: 20px;
    padding-inline: 5px;
`;

const RateChangeValue = styled.p`
    font-weight: bold;
`;

export const ListSection = () => {
    return (
        <Wrapper>
            <List>
                <ListElement>
                    <Avatar src="/images/bitcoin.png" alt="" />
                    <CurrencyName>Bitcoin</CurrencyName>
                    <Rate>$43,000</Rate>
                    <RateDirection>
                        <Icon type="upArrow" />
                        <RateChangeValue>13%</RateChangeValue>
                    </RateDirection>
                </ListElement>
                <ListElement>
                    <Avatar src="/images/ethereum.png" alt="" />
                    <CurrencyName>Ethereum</CurrencyName>
                    <Rate>$12,000</Rate>
                    <RateDirection>
                        <Icon type="upArrow" />
                        <RateChangeValue>5%</RateChangeValue>
                    </RateDirection>
                </ListElement>
            </List>
        </Wrapper>
    );
};
