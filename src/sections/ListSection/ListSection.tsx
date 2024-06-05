import styled from "styled-components";
import { Icon } from "../../ui/Icon/Icon";

const Wrapper = styled.div``;

const List = styled.ul``;

const ListElement = styled.li`
    list-style-type: none;
    display: flex;
    align-items: center;
`;

const Avatar = styled.img`
    width: 50px;
    height: 50px;
`;

const CurrencyName = styled.p`
    font-weight: bold;
`;

const Rate = styled.p``;

const RateDirection = styled.div``;

const RateChangeValue = styled.p``;

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
                        <RateChangeValue></RateChangeValue>
                    </RateDirection>
                </ListElement>
                <ListElement>
                    <Avatar src="/images/ethereum.png" alt="" />
                    <CurrencyName>Ethereum</CurrencyName>
                    <Rate></Rate>
                    <RateDirection></RateDirection>
                </ListElement>
            </List>
        </Wrapper>
    );
};
