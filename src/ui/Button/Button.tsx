import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

export const Button = ({
    children,
    onClick,
    mode = "primary",
    disabled,
}: ButtonProps) => {
    return (
        <StyledButton disabled={disabled} $mode={mode} onClick={onClick}>
            {children}
        </StyledButton>
    );
};
