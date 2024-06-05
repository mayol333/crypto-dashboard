import { http, HttpResponse } from "msw";
import {
    generateDates,
    generateRates,
    ratesSeed,
    secondsInSelectedNumberOfDays,
} from "../data/dates";

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
];
