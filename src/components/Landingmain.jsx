import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../scripts/AuthContext.jsx";

export default function Landingmain() {

    const navigate = useNavigate();
    const { logIn } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async(e) => {
        e.preventDefault();
        try{
            const loggedUser = await logIn(email, password);
            console.log(loggedUser);
            navigate("/home");
        } catch(error){
            console.log(error);
        }
    }

    return (
        <div className="mt-5 d-flex flex-column align-items-center">
            <h4 className="signup-heading">Welcome to <span className="text-orange">GymSync AI</span></h4>
            <p className="">Subscription Free, Hassle Free, Alternative to Workout Trackers</p>

            <form onSubmit={handleSignup} className="mt-5 border shadow-sm rounded p-5">
                <div className="d-flex flex-column form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control w-100" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="d-flex flex-column mt-3 form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control w-100" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <input type="submit" value="Login" className="btn btn-dark btn-custom m-auto d-block mt-3" />
            </form>

            <p className="mt-3">Dont have an account yet? <Link className="text-orange" to={"/register"}>Sign Up</Link></p>
        </div>
    )
}