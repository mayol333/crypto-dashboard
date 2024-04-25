import * as Select from "@radix-ui/react-select";

import styled, { css } from "styled-components";

import { CaretDownIcon } from "@radix-ui/react-icons";
import { Label } from "@radix-ui/react-label";
import { SelectTriggerProps } from "./types";

export const SelectTrigger = styled(Select.Trigger)<SelectTriggerProps>`
    padding: ${({ theme }) => theme.gridUnit * 2.5}px;
    font-size: ${({ theme }) => theme.fonts.size.xs}px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius};
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    column-gap: ${({ theme }) => theme.gridUnit * 2}px;
    ${({ theme, $error }) =>
        $error &&
        css`
            border: 1px solid ${theme.colors.primary.red};
        `}
    cursor: pointer;
    width: 170px;

    &[data-placeholder] {
        color: ${({ theme }) => theme.colors.black};
    }
`;

export const SelectIcon = styled(CaretDownIcon)`
    display: flex;
    align-items: center;
    stroke: ${({ theme }) => theme.colors.primary.navy};
`;

export const SelectContent = styled(Select.Content)`
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    max-height: 200px;
    width: 170px;
    z-index: 10;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

export const SelectReset = styled.p`
    padding: ${({ theme }) => theme.gridUnit * 1.5}px;
    padding-left: ${({ theme }) => theme.gridUnit * 2.5}px;
    font-size: ${({ theme }) => theme.fonts.size.xs}px;
    color: ${({ theme }) => theme.colors.black};
    &:hover {
        background-color: ${({ theme }) => theme.colors.gray};
        outline: none;
    }
`;

export const SelectItem = styled(Select.Item)`
    padding: ${({ theme }) => theme.gridUnit * 1.5}px;
    padding-left: ${({ theme }) => theme.gridUnit * 2.5}px;
    font-size: ${({ theme }) => theme.fonts.size.xs}px;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.gridUnit * 2}px;
    user-select: none;

    &:focus {
        background-color: ${({ theme }) => theme.colors.gray};
        color: ${({ theme }) => theme.colors.black};
        outline: none;
    }
`;

export const StyledLabel = styled(Label)`
    color: ${({ theme }) => theme.colors.fonts.dark};
    font-size: ${({ theme }) => theme.fonts.size.xs}px;
    display: block;
    margin-bottom: ${({ theme }) => theme.gridUnit * 2.5}px;
`;

export const ErrorMessage = styled.span`
    color: ${({ theme }) => theme.colors.primary.red};
    font-size: ${({ theme }) => theme.fonts.size.xs}px;
    margin-left: ${({ theme }) => theme.gridUnit * 3}px;
    display: inline-block;
    margin-top: ${({ theme }) => theme.gridUnit * 2.5}px;
`;

export const SelectWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
