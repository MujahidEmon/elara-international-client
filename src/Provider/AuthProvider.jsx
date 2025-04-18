import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import {
  deleteFromCart,
  getCartProducts,
  saveToCart,
} from "../Utils/LocalStroage";


// creating context to access the data from the whole app
export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const googleProvider = new GoogleAuthProvider();


//   function for firebase login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };


// function for firebase register
  const register = (email, password, name, photo) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };


// function for google login
  const GoogleSignin = () => {
    return signInWithPopup(auth, googleProvider);
  };


// function for logout
  const logout = () => {
    return signOut(auth);
  };


// updating user info
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // setLoading(false)
    });

    return () => unSubscribe();
  }, []);



// load the cart products from localstorage
  useEffect(() => {
    const products = getCartProducts();
    setCartProducts(products);
  }, []);


// function for add to cart and stored in local storage
  const handleAddToCart = (product) => {
    saveToCart(product);
    const products = getCartProducts();
    setCartProducts(products);
  };


// remove cart products and also from local storage

  const handleRemoveFromCart = (_id) => {
    deleteFromCart(_id);
    const products = getCartProducts();
    setCartProducts(products);
  };


//   object to pass the element
  const AuthInfo = {
    login,
    register,
    GoogleSignin,
    user,
    loading,
    logout,
    handleRemoveFromCart,
    cartProducts,
    handleAddToCart,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
