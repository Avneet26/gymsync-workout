import {useContext} from "react";
import {WeekContext} from "../scripts/DateContext.jsx";
import CalenderDateUI from "./CalenderDateUI.jsx";

export default function CalenderMain() {

    const { week, setWeek, getWeekDates } = useContext(WeekContext);

    const dateObjectArr = getWeekDates(week);
    console.log(dateObjectArr);

    return (
        <div className="d-flex align-items-center justify-content-center mt-3">
            <button className="mx-5 btn btn-dark rounded" onClick={() => {setWeek(week + 1)}}>{"<"}</button>
            {dateObjectArr.map((dateObj) => (
                <CalenderDateUI dateObj={dateObj} key={dateObj.day}/>
            ))}
            <button className="mx-5 btn btn-dark rounded" onClick={() => {setWeek(week - 1)}}>{">"}</button>
        </div>
    )
}