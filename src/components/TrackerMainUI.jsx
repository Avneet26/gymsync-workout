import {WeekContext} from "../scripts/DateContext.jsx";
import {useContext} from "react";

export default function TrackerMainUI() {

    const { week } = useContext(WeekContext);

    return (
        <>
            Tracker Main UI
            {week}
        </>
    )
}