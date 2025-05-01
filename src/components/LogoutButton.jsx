import {useAuth} from "../scripts/AuthContext.jsx";
import {useNavigate} from "react-router-dom";

export default function LogoutButton(){

    const { logOut } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async(e) => {
        e.preventDefault();
        await logOut();
        navigate("/");
    }

    return (
        <button className="btn btn-dark btn-custom" onClick={handleLogout}>Logout</button>
    )
}