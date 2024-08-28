import styled from "styled-components";

export const StyledCryptoPanel = styled.div`
    display: flex;
    border: 1px solid #ccc;
    border-radius: 5px;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    position: relative;
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

export const DeleteFavoriteCrypto = styled.span`
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
`;
