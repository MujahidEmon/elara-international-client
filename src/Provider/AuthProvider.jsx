import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { useLoaderData } from "react-router-dom";
import { deleteFromCart, getCartProducts } from "../Utils/LocalStroage";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)
    const [cartProducts, setCartProducts] = useState([])
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

    useEffect(() => {
        const products = getCartProducts();
        setCartProducts(products)
      }, [])

      const handleRemoveFromCart = (_id) => {
          deleteFromCart(_id)
          const products = getCartProducts()
          setCartProducts(products)
      }
    const AuthInfo = {
    
        login,
        register,
        GoogleSignin,
        user,
        loading,
        logout,
        handleRemoveFromCart,
        cartProducts

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;