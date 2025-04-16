import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth/web-extension";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)
    const googleProvider = new GoogleAuthProvider();
    const products = [
        {
            name: 'Hoco W35 Wireless Headphone',
            price: 1300,
            image: 'https://www.primebazar.com/public/uploads/all/tFCNgqBJ5nC0cX632NRu2iMjp4GWOzKwfY9GLCOQ.webp'

        },
        {
            name: 'Vintage T9 Trimmer',
            price: 445,
            image: 'https://www.cellsii.com/images/detailed/43/vintage-t9-trimmer-professional-1_3b2y-yt.jpg'
        },
        {
            name: 'Xiaomi Rechargeable Trimmer',
            price: 1150,
            image: 'https://shavershop.com.bd/wp-content/uploads/2022/04/ENCHEN-Boost-USB-Electric-Hair-Clipper-for-Men.jpg'
        }
    ]

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
        products,
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