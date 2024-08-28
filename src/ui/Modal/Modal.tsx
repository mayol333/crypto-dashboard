import { ModalProps } from "./types";
import { ModalBackground, ModalCloseButton, StyledModal } from "./styles";

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
