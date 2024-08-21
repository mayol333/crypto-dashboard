import styled from "styled-components";
import { ModalProps } from "./types";

const ModalBackground = styled.div<{ $open: boolean }>`
    inset: 0;
    background-color: rgba(100, 100, 100, 0.7);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    display: ${({ $open }) => ($open ? "flex" : "none")};
`;

const StyledModal = styled.div`
    max-width: 500px;
    background-color: ${({ theme }) => theme.colors.white};
    position: relative;
    padding: 40px;
`;

const ModalCloseButton = styled.span`
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
`;

export const Modal = ({
    modalOpen,
    handleModalClose,
    children,
}: ModalProps) => {
    if (!modalOpen) {
        return null;
    }
    return (
        <ModalBackground $open={modalOpen}>
            <StyledModal>
                <ModalCloseButton onClick={handleModalClose}>
                    X
                </ModalCloseButton>
                {children}
            </StyledModal>
        </ModalBackground>
    );
};
