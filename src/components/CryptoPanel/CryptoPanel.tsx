import {
    Avatar,
    CurrencyName,
    DeleteFavoriteCrypto,
    Rate,
    StyledCryptoPanel,
} from "./styles";
import { CryptoPanelProps } from "./types";

export const CryptoPanel = ({
    avatar,
    name,
    rate,
    handlePanelDelete,
}: CryptoPanelProps) => {
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
            <DeleteFavoriteCrypto onClick={handlePanelDelete}>
                X
            </DeleteFavoriteCrypto>
        </StyledCryptoPanel>
    );
};
