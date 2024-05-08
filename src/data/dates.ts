import { format } from "date-fns";

export type Period = keyof typeof secondsInSelectedNumberOfDays;
const ratesSeed = 40;

const secondsInSelectedNumberOfDays = {
    month: 259200,
    week: 60480,
    fiveDays: 43200,
    threeDays: 25920,
    oneDay: 0,
};
export const generateDates = (period: Period) => {
    const arrayOfDates = [];
    const currentDate = new Date().getTime();
    let nextDate = currentDate;
    for (let i = 0; i < secondsInSelectedNumberOfDays[period]; i++) {
        arrayOfDates.push(format(nextDate - 10000, "dd:MM:yyyy - kk:mm:ss"));
        nextDate = nextDate - 10000;
    }
    return arrayOfDates;
};
export const generateDayDates = (magicNumber: number, currentDate: number) => {
    const arrayOfDates = [];
    let nextDate = currentDate;
    for (let i = 0; i < Math.round((currentDate - magicNumber) / 10000); i++) {
        arrayOfDates.push(format(nextDate - 10000, "dd:MM:yyyy - kk:mm:ss"));
        nextDate = nextDate - 10000;
    }
    return arrayOfDates;
};
export const generateRates = (seed: number, count: number): number[] => {
    const arrayOfRates = [];
    let nextRate = seed;
    for (let i = 0; i < count; i++) {
        const difference = Math.floor(Math.random() * 101);
        const directionOfRate = Math.random() < 0.5 ? 1 : -1;
        arrayOfRates.push(nextRate + difference * directionOfRate);
        nextRate = nextRate + difference * directionOfRate;
    }
    return arrayOfRates;
};
const initialRates = generateRates(
    ratesSeed,
    secondsInSelectedNumberOfDays.month
);
export const generateChartData = (period: Period) => {
    if (period === "oneDay") {
        const magicNumber = new Date(new Date().setHours(0, 0, 0, 0)).getTime();
        const currentDate = new Date().getTime();
        return [
            generateDayDates(magicNumber, currentDate),
            initialRates.slice(
                259200 - Math.round((currentDate - magicNumber) / 10000)
            ),
        ];
    }

    return [
        generateDates(period),
        initialRates.slice(259200 - secondsInSelectedNumberOfDays[period]),
    ];
};
