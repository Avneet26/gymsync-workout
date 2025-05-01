// src/components/PrivateRoute.jsx
import {Link, Navigate} from "react-router-dom";
import { useAuth } from "../scripts/AuthContext.jsx";

export default function PrivateRoute({ children }) {
    const { user } = useAuth();
    return user ? children : <Link to="/" />;
}
