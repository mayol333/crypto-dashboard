import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow-y: auto;
    height: 550px;
`;

export const ListElement = styled.li`
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:nth-child(odd) {
        background-color: ${({ theme }) => theme.colors.backgrounds.listOdd};
    }
    padding: 15px;
    font-size: 15px;
`;

export const Avatar = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 15px;
`;

export const CurrencyName = styled.p`
    font-weight: bold;
    width: 100px;
`;

export const Rate = styled.p`
    width: 100px;
`;

export const RateDirection = styled.div<{ $isRatePositive: boolean }>`
    display: flex;
    align-items: center;
    border: 2px solid
        ${({ theme, $isRatePositive }) =>
            $isRatePositive ? theme.colors.increase : theme.colors.decrease};
    border-radius: 20px;
    padding-inline: 5px;
    min-width: 70px;
`;

export const RateChangeValue = styled.p`
    font-weight: bold;
`;
