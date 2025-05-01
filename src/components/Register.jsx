import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../scripts/AuthContext.jsx";

export default function Register() {

    const {signUp} = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleRegister = async(e) => {
        e.preventDefault();
        try{
            await signUp(email, password, name);
            navigate("/home");
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="mt-5 d-flex flex-column align-items-center">
            <h4 className="signup-heading">Register to <span className="text-orange">GymSync AI</span></h4>
            <p className="m-0">Subscription Free, Hassle Free, Alternative to Workout Trackers</p>
            <p className="">Lets make your account and get started quickly</p>

            <form onSubmit={handleRegister} className="mt-5 border shadow-sm rounded p-5">
                <div className="d-flex flex-column form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" className="form-control w-100" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="d-flex flex-column mt-3 form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control w-100" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="d-flex flex-column mt-3 form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control w-100" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <input type="submit" value="SignUp" className="btn btn-dark btn-custom m-auto d-block mt-3" />
            </form>

            <p className="mt-3">Already have an account? <Link className="text-orange" to={"/"}>Log In</Link></p>
        </div>
    )
}