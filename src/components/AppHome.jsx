import {useAuth} from "../scripts/AuthContext.jsx";
import LogoutButton from "./LogoutButton.jsx";
import CalenderMain from "./CalenderMain.jsx";
import {WeekProvider} from "../scripts/DateContext.jsx";
import TrackerMainUI from "./TrackerMainUI.jsx";
import PRSectionMain from "./PRSectionMain.jsx";

export default function AppHome() {

    const { user } = useAuth();

    return (
        <div className="AppHome d-flex flex-column align-items-center">
            <p>Hello, {user?.displayName}</p>
            <LogoutButton />
            <WeekProvider>
                <div className="d-flex flex-column align-items-center">
                    <CalenderMain />
                    <PRSectionMain />
                    <TrackerMainUI />
                </div>
            </WeekProvider>
        </div>
    )
}