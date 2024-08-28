import { useState } from "react";
export const useModalState = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedPanelKey, setSelectedPanelKey] = useState("");
    const handleModalOpen = (panelKey: string) => {
        setModalOpen(true);
        setSelectedPanelKey(panelKey);
    };
    const handleModalClose = () => {
        setModalOpen(false);
        setSelectedPanelKey("");
    };
    return {
        modalOpen,
        handleModalOpen,
        handleModalClose,
        selectedPanelKey,
    };
};
