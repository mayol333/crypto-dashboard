import { styled } from "styled-components";

export const Container = styled.div``;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;

export const ListElement = styled.li`
    display: flex;
    &:nth-child(odd) {
        background-color: ${({ theme }) => theme.colors.backgrounds.listOdd};
    }
    padding: 15px;
`;

export const Action = styled.p`
    width: 20%;
`;

export const Currency = styled.p`
    width: 20%;
`;

export const Amount = styled.p`
    width: 20%;
`;

export const CryptoAmount = styled.p`
    width: 20%;
`;

export const Date = styled.p`
    width: 20%;
`;

export const Bin = styled.img`
    width: 25px;
`;
