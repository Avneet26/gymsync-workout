// src/context/AuthContext.jsx

import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile
} from "firebase/auth";
import { auth } from "./firebaseconfig.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // internal only

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser || null);
            setLoading(false); // done waiting
        });

        return () => unsubscribe();
    }, []);

    const signUp = async (email, password, displayName) => {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Update display name after creation
        await updateProfile(user, {
            displayName: displayName,
        });

        return user;
    };

    const logIn = (email, password) =>
        signInWithEmailAndPassword(auth, email, password);

    const logOut = () => signOut(auth);

    // ✅ Wait to render children until auth state is ready
    if (loading) return <div className="flex justify-center items-center h-screen text-lg">Loading...</div>;

    return (
        <AuthContext.Provider value={{ user, signUp, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
