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
  const [allProducts, setAllProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const googleProvider = new GoogleAuthProvider();
  const productUrl = 'http://localhost:5000/products';


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


// useEffect to load all products
useEffect(() => {
  fetch(productUrl)
  .then(res => res.json())
  .then(data => {
    setAllProducts(data)
  })
},[productUrl])


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


// function to find the total bill from the cart products
const totalPrice = cartProducts.reduce((sum, item) => sum + Number(item.price), 0);
//   console.log("total: ",totalPrice);
  const grandTotal = totalPrice + 120;


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
    totalPrice,
    grandTotal,
    allProducts
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
