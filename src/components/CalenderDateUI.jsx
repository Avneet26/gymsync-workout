import moment from "moment";
import FadingComponent from "../scripts/FramerMotion.jsx";
import {useContext} from "react";
import {WeekContext} from "../scripts/DateContext.jsx";

export default function CalenderDateUI({dateObj}) {

    const {selectedDay, setSelectedDay } = useContext(WeekContext);
    const currentDateObj = moment().format("YYYY-MM-DD");

    const handleDateClick = () => {
        setSelectedDay(dateObj.date);
    }

    return (
            <div className={`d-flex flex-column align-items-center mx-1 px-2`}>
                <p className="mb-1">{moment(dateObj.date).format("ddd")}</p>
                <FadingComponent>
                    <p onClick={handleDateClick} className={`calender-numbers btn px-0 
                    ${dateObj.date == currentDateObj ? 'border-2 border-dark-subtle' : ''}
                    ${dateObj.date == selectedDay ? 'btn-dark-subtle' : 'btn-light'}
                    `}>
                        {moment(dateObj.date).format("DD")}
                    </p>
                </FadingComponent>
            </div>
    )
}