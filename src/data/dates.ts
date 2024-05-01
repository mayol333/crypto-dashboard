import { format } from "date-fns";

type Period = keyof typeof secondsInSelectedNumberOfDays;

const secondsInSelectedNumberOfDays = {
    month: 259200,
    week: 60480,
    fiveDays: 43200,
    threeDays: 25920,
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

export const generateChartData = (seed: number, period: Period) => {
    return [
        generateDates(period),
        generateRates(seed, secondsInSelectedNumberOfDays[period]),
    ];
};
