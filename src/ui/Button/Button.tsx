import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

export const Button = ({
    children,
    onClick,
    mode = "primary",
}: ButtonProps) => {
    return (
        <StyledButton $mode={mode} onClick={onClick}>
            {children}
        </StyledButton>
    );
};
