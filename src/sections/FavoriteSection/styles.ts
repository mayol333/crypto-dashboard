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
export const ContainerWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
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

export const Container = styled.div`
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const OpenModal = styled.img`
    height: 40px;
    width: 40px;
`;

export const OpenModalButton = styled.button`
    cursor: pointer;
    background-color: transparent;
`;
