import { styled } from "styled-components";

export const StyledInput = styled.input``;
export const InputContainer = styled.div`
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 10px;
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

export const InputLabel = styled.label`
    display: block;
    margin-bottom: 10px;
`;
export const InputError = styled.p`
    font-size: 12px;
    margin-left: 5px;
`;
