import { http, HttpResponse } from "msw";
import {
    generateDates,
    generateRates,
    ratesSeed,
    secondsInSelectedNumberOfDays,
} from "../data/dates";

const cryptoCurrency = [
    {
        avatar: "/images/bitcoin.png",
        currencyName: "Bitcoin",
        rate: "$14,000",
        isRatePositive: true,
        rateChangeValue: "14%",
        id: 0,
    },
    {
        avatar: "/images/ethereum.png",
        currencyName: "Ethereum",
        rate: "$8,000",
        isRatePositive: false,
        rateChangeValue: "14%",
        id: 1,
    },
    {
        avatar: "/images/tether.png",
        currencyName: "Tether",
        rate: "$1700",
        isRatePositive: true,
        rateChangeValue: "7%",
        id: 2,
    },
    {
        avatar: "/images/BNB.png",
        currencyName: "BNB",
        rate: "$9,000",
        isRatePositive: false,
        rateChangeValue: "-19%",
        id: 3,
    },
    {
        avatar: "/images/solana.png",
        currencyName: "Solana",
        rate: "$29,000",
        isRatePositive: true,
        rateChangeValue: "50%",
        id: 4,
    },
    {
        avatar: "/images/USDC.png",
        currencyName: "USDC",
        rate: "$700",
        isRatePositive: true,
        rateChangeValue: "2%",
        id: 5,
    },
    {
        avatar: "/images/XRP.png",
        currencyName: "XRP",
        rate: "$900",
        isRatePositive: false,
        rateChangeValue: "-22%",
        id: 6,
    },
    {
        avatar: "/images/dogecoin.png",
        currencyName: "Dogecoin",
        rate: "$18,000",
        isRatePositive: true,
        rateChangeValue: "50%",
        id: 7,
    },
];
export const handlers = [
    http.get("/initial_data", () => {
        return HttpResponse.json({
            dates: generateDates(secondsInSelectedNumberOfDays.month),
            rates: generateRates(
                ratesSeed,
                secondsInSelectedNumberOfDays.month
            ),
        });
    }),
    http.get("/initial_currencies", () => {
        return HttpResponse.json({
            currencies: cryptoCurrency,
        });
    }),
];
