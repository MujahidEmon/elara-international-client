import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { useLoaderData } from "react-router-dom";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)
    const googleProvider = new GoogleAuthProvider();
    

    const  login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const register = (email, password, name, photo) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const GoogleSignin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logout = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            // setLoading(false)
        })

        return () => unSubscribe();
    },[])

    const AuthInfo = {
    
        login,
        register,
        GoogleSignin,
        user,
        loading,
        logout
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;