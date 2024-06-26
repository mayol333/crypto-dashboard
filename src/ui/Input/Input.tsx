import { InputProps } from "./types";
import { InputContainer, InputError, InputLabel, StyledInput } from "./style";
export const Input = ({ label, error, value, onChange }: InputProps) => {
    return (
        <div>
            {!!label && <InputLabel htmlFor="input">{label}</InputLabel>}
            <InputContainer>
                <StyledInput
                    type="text"
                    value={value}
                    onChange={onChange}
                    id="input"
                />
            </InputContainer>
            {!!error && <InputError>{error}</InputError>}
        </div>
    );
};
