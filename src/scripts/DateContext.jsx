import { createContext, useState } from "react";
import moment from "moment/moment.js";

export const WeekContext = createContext();

export const WeekProvider = ({ children }) => {
    const [week, setWeek] = useState(0);
    const [selectedDay, setSelectedDay] = useState(moment().format("YYYY-MM-DD"));

    const getWeekDates = (weeksAgo = 0) => {
        const startOfWeek = moment().startOf('week').subtract(weeksAgo, 'weeks'); // Sunday is default
        const dates = [];

        for (let i = 0; i < 7; i++) {
            dates.push({
                day: startOfWeek.clone().add(i, 'days').format('dddd'),   // e.g., Monday
                date: startOfWeek.clone().add(i, 'days').format('YYYY-MM-DD') // e.g., 2025-04-28
            });
        }

        return dates;
    };

    return (
        <WeekContext.Provider value={{ week, setWeek, selectedDay, setSelectedDay, getWeekDates }}>
            {children}
        </WeekContext.Provider>
    )
}