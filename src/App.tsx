import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "./store/store";
import { setActive } from "./store/buttonSlice";

const StyledButton = styled.button<{ $active: boolean }>`
    color: ${({ $active, theme }) =>
        $active ? theme.colors.red : theme.colors.blue};
    font-size: 20px;
`;

export const App = () => {
    const { active } = useAppSelector(({ button }) => button);
    const dispatch = useAppDispatch();
    const handleButton = () => {
        dispatch(setActive(!active));
    };
    return (
        <StyledButton $active={active} onClick={handleButton}>
            dasd
        </StyledButton>
    );
};
