import { format } from "date-fns";

export type Period = keyof typeof secondsInSelectedNumberOfDays;
export const ratesSeed = 200;

export const secondsInSelectedNumberOfDays = {
    month: 259200,
    week: 60480,
    fiveDays: 43200,
    threeDays: 25920,
    oneDay: 0,
};

export const generateDates = (count: number) => {
    const arrayOfDates = [];
    const startDate = new Date();
    let nextDate = startDate.getTime();
    for (let i = 0; i < count; i++) {
        arrayOfDates.push(format(nextDate - 10000, "dd:MM:yyyy - kk:mm:ss"));
        nextDate = nextDate - 10000;
    }
    return [...arrayOfDates].reverse();
};
export const generateRates = (seed: number, count: number): number[] => {
    const arrayOfRates = [];
    let nextRate = seed;
    for (let i = 0; i < count; i++) {
        const difference = Math.floor(Math.random() * 101);
        const directionOfRate = Math.random() < 0.5 ? 1 : -1;
        const calculatedRate = nextRate + difference * directionOfRate;
        arrayOfRates.push(calculatedRate < 0 ? 0 : calculatedRate);
        nextRate = calculatedRate < 0 ? 0 : calculatedRate;
    }
    return arrayOfRates;
};
export const generateChartData = (
    period: Period,
    initialRates: number[],
    initialDates: string[]
): [string[], number[]] => {
    if (period === "oneDay") {
        const startDate = new Date(new Date().setHours(0, 0, 0, 0)).getTime();
        const currentDate = new Date().getTime();
        const datesSpan =
            259200 - Math.round((currentDate - startDate) / 10000);
        return [initialDates.slice(datesSpan), initialRates.slice(datesSpan)];
    }
    const datesSpan = 259200 - secondsInSelectedNumberOfDays[period];
    return [initialDates.slice(datesSpan), initialRates.slice(datesSpan)];
};
