import { Modal } from "../../ui/Modal/Modal";
import { useModalState } from "../../hooks/useModalState";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useEffect, useState } from "react";
import { getInitialList } from "../../store/list/listThunk";
import { Icon } from "../../ui/Icon/Icon";
import {
    ListElement,
    RateDirection,
    RateChangeValue,
    List,
    Container,
    ContainerWrapper,
    OpenModal,
    OpenModalButton,
    Avatar,
    CurrencyName,
    Rate,
} from "../FavoriteSection/styles";
import { CryptoCurrency } from "../../store/list/listSlice";
import { Panel } from "./types";
import { CryptoPanel } from "../../components/CryptoPanel/CryptoPanel";

export const FavoriteSection = () => {
    const [panel, setPanel] = useState<Panel>({
        firstPanel: null,
        secondPanel: null,
        thirdPanel: null,
        fourthPanel: null,
    });
    const dispatch = useAppDispatch();
    const { cryptoCurrencies } = useAppSelector(({ list }) => list);
    useEffect(() => {
        dispatch(getInitialList());
    }, [dispatch]);
    const { modalOpen, handleModalOpen, handleModalClose, selectedPanelKey } =
        useModalState();
    const handleCryptoSelect = (currency: CryptoCurrency) => {
        setPanel({ ...panel, [selectedPanelKey]: currency });
    };
    const handlePanelDelete = (key: string) => {
        setPanel({ ...panel, [key]: null });
    };
    const { firstPanel, secondPanel, thirdPanel, fourthPanel } = panel;
    return (
        <ContainerWrapper>
            {firstPanel ? (
                <CryptoPanel
                    avatar={firstPanel.avatar}
                    name={firstPanel.currencyName}
                    rate={firstPanel.rate}
                    handlePanelDelete={() => handlePanelDelete("firstPanel")}
                />
            ) : (
                <Container>
                    <OpenModalButton
                        onClick={() => handleModalOpen("firstPanel")}
                    >
                        <OpenModal src="../../../public/images/plus.png.png" />
                    </OpenModalButton>
                </Container>
            )}
            {secondPanel ? (
                <CryptoPanel
                    avatar={secondPanel.avatar}
                    name={secondPanel.currencyName}
                    rate={secondPanel.rate}
                    handlePanelDelete={() => handlePanelDelete("secondPanel")}
                />
            ) : (
                <Container>
                    <OpenModalButton
                        onClick={() => handleModalOpen("secondPanel")}
                    >
                        <OpenModal src="../../../public/images/plus.png.png" />
                    </OpenModalButton>
                </Container>
            )}
            {thirdPanel ? (
                <CryptoPanel
                    avatar={thirdPanel.avatar}
                    name={thirdPanel.currencyName}
                    rate={thirdPanel.rate}
                    handlePanelDelete={() => handlePanelDelete("thirdPanel")}
                />
            ) : (
                <Container>
                    <OpenModalButton
                        onClick={() => handleModalOpen("thirdPanel")}
                    >
                        <OpenModal src="../../../public/images/plus.png.png" />
                    </OpenModalButton>
                </Container>
            )}
            {fourthPanel ? (
                <CryptoPanel
                    avatar={fourthPanel.avatar}
                    name={fourthPanel.currencyName}
                    rate={fourthPanel.rate}
                    handlePanelDelete={() => handlePanelDelete("fourthPanel")}
                />
            ) : (
                <Container>
                    <OpenModalButton
                        onClick={() => handleModalOpen("fourthPanel")}
                    >
                        <OpenModal src="../../../public/images/plus.png.png" />
                    </OpenModalButton>
                </Container>
            )}
            <Modal modalOpen={modalOpen} handleModalClose={handleModalClose}>
                <List>
                    {cryptoCurrencies.map(
                        ({
                            avatar,
                            currencyName,
                            rate,
                            isRatePositive,
                            rateChangeValue,
                        }) => {
                            return (
                                <ListElement
                                    onClick={() => {
                                        handleCryptoSelect({
                                            avatar,
                                            currencyName,
                                            rate,
                                            isRatePositive,
                                            rateChangeValue,
                                        });
                                    }}
                                    key={currencyName}
                                >
                                    <Avatar src={avatar} alt="" />
                                    <CurrencyName>{currencyName}</CurrencyName>
                                    <Rate>{rate}</Rate>
                                    <RateDirection
                                        $isRatePositive={isRatePositive}
                                    >
                                        <Icon
                                            type={
                                                isRatePositive
                                                    ? "upArrow"
                                                    : "downArrow"
                                            }
                                        />
                                        <RateChangeValue>
                                            {rateChangeValue}
                                        </RateChangeValue>
                                    </RateDirection>
                                </ListElement>
                            );
                        }
                    )}
                </List>
            </Modal>
        </ContainerWrapper>
    );
};
