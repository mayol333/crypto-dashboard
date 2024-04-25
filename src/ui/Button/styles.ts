import styled, { css } from "styled-components";
import { ButtonMode } from "./types";

export const StyledButton = styled.button<{ $mode: ButtonMode }>`
    ${({ theme, $mode }) => {
        switch ($mode) {
            case "secondary":
                return css`
                    padding: ${theme.gridUnit * 2}px;
                    border-radius: ${theme.borderRadius};
                    background-color: ${theme.colors.white};
                    color: ${theme.colors.black};
                    border: 1px solid #dedfe1;
                `;
            default:
                return css`
                    padding: ${theme.gridUnit * 2}px;
                    border-radius: ${theme.borderRadius};
                    background-color: ${theme.colors.black};
                    color: ${theme.colors.white};
                `;
        }
    }}
`;
