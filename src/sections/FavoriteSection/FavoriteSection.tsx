import styled from "styled-components";
import { Modal } from "../../ui/Modal/Modal";
import { useModalState } from "../../hooks/useModalState";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useEffect, useState } from "react";
import { getInitialList } from "../../store/list/listThunk";
import { Icon } from "../../ui/Icon/Icon";
import {
    ListElement,
    Avatar,
    CurrencyName,
    RateDirection,
    RateChangeValue,
    List,
    Rate,
} from "../FavoriteSection/styles";
import { CryptoCurrency } from "../../store/list/listSlice";
import { CryptoPanelProps } from "./types";

const ContainerWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
`;

const Container = styled.div`
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const OpenModal = styled.img`
    height: 40px;
    width: 40px;
`;

const OpenModalButton = styled.button`
    cursor: pointer;
    background-color: transparent;
`;

const StyledCryptoPanel = styled.div`
    display: flex;
    border: 1px solid #ccc;
    border-radius: 5px;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
`;
const CryptoPanel = ({ avatar, name, rate }: CryptoPanelProps) => {
    return (
        <StyledCryptoPanel>
            <Avatar src={avatar} />
            <div>
                <p>
                    <CurrencyName>{name}</CurrencyName>
                </p>
                <p>
                    <Rate>{rate}</Rate>
                </p>
            </div>
        </StyledCryptoPanel>
    );
};

export const FavoriteSection = () => {
    const [panel, setPanel] = useState<CryptoCurrency[]>([]);
    const dispatch = useAppDispatch();
    const { cryptoCurrencies } = useAppSelector(({ list }) => list);
    const handleCryptoSelect = (currency: CryptoCurrency) => {
        if (panel.length < 4) {
            setPanel([...panel, currency]);
        }
    };
    useEffect(() => {
        dispatch(getInitialList());
    }, [dispatch]);
    const { modalOpen, handleModalOpen, handleModalClose } = useModalState();
    return (
        <ContainerWrapper>
            {panel[0] ? (
                <CryptoPanel
                    avatar={panel[0].avatar}
                    name={panel[0].currencyName}
                    rate={panel[0].rate}
                />
            ) : (
                <Container>
                    <OpenModalButton onClick={handleModalOpen}>
                        <OpenModal src="../../../public/images/plus.png.png" />
                    </OpenModalButton>
                </Container>
            )}
            {panel[1] ? (
                <CryptoPanel
                    avatar={panel[1].avatar}
                    name={panel[1].currencyName}
                    rate={panel[1].rate}
                />
            ) : (
                <Container>
                    <OpenModalButton onClick={handleModalOpen}>
                        <OpenModal src="../../../public/images/plus.png.png" />
                    </OpenModalButton>
                </Container>
            )}
            {panel[2] ? (
                <CryptoPanel
                    avatar={panel[2].avatar}
                    name={panel[2].currencyName}
                    rate={panel[2].rate}
                />
            ) : (
                <Container>
                    <OpenModalButton onClick={handleModalOpen}>
                        <OpenModal src="../../../public/images/plus.png.png" />
                    </OpenModalButton>
                </Container>
            )}
            {panel[3] ? (
                <CryptoPanel
                    avatar={panel[3].avatar}
                    name={panel[3].currencyName}
                    rate={panel[3].rate}
                />
            ) : (
                <Container>
                    <OpenModalButton onClick={handleModalOpen}>
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
