import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import {
  decrementFromCart,
  deleteFromCart,
  getCartProducts,
  incrementFromCart,
  saveToCart,
} from "../Utils/LocalStroage";
import axios from "axios";
import toast from "react-hot-toast";
import useAxiosSecure from "../Hooks/useAxiosSecure";

// creating context to access the data from the whole app
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();


  // function for firebase login
  const login = (email, password) => {
    setLoading(true);  // <-- loading start on login attempt
    return signInWithEmailAndPassword(auth, email, password);
  };

  // function for firebase register
  const register = (email, password, name, photo) => {
    setLoading(true);  // <-- loading start on register attempt
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // function for google login
  const GoogleSignin = () => {
    setLoading(true);  // <-- loading start on google signin attempt
    return signInWithPopup(auth, googleProvider);
  };

  // function for logout
  const logout = () => {
    setLoading(true);  // <-- loading start on logout attempt
    return signOut(auth);
  };


  // token related function
  const getToken = async (email) => {
    const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`, {email}, {withCredentials: true});
    console.log(data);
    return data;
  }




  // updating user info and loading state properly
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser){
        getToken(currentUser.email);
      }
      setLoading(false);  // <-- loading ends here after auth state check
    });

    return () => unSubscribe();
  }, []);




 

  // remove cart products and also from local storage
  // const handleRemoveFromCart = (_id) => {
  //   if (user) {
  //     // setLoading(true);  // <-- loading start when removing from server cart
  //     fetch(`https://elara-international-server.onrender.com/cartProducts/${_id}`, {
  //       method: "DELETE",
  //     })
  //       .then((res) => res.json())
  //       .then(() => {
  //         axios.get(`https://elara-international-server.onrender.com/cartProducts/${user.email}`)
  //           .then(res => setCartProducts(res.data));
  //       })
  //       .catch(err => console.log(err))
  //       .finally(() => setLoading(false));  // <-- loading ends here after removal
  //   } else {
  //     deleteFromCart(_id);
  //     const products = getCartProducts();
  //     setCartProducts(products);
  //   }
  // };

  // const handleIncrease = (product) => {
  //   if (user) {
  //     setLoading(true);  // <-- loading start when increasing qty on server
  //     fetch(`https://elara-international-server.onrender.com/cartProducts/increase/${product._id}`, {
  //       method: "PATCH",
  //     })
  //       .then((res) => res.json())
  //       .then(() => {
  //         axios.get(`https://elara-international-server.onrender.com/cartProducts/${user.email}`)
  //           .then(res => setCartProducts(res.data))
  //           .catch(err => console.log(err));
  //       })
  //       .catch(err => console.log(err))
  //       .finally(() => setLoading(false));  // <-- loading ends here
  //   } else {
  //     const updated = incrementFromCart(product._id); // local function to increase qty
  //     setCartProducts(updated);
  //   }
  // };

  // const handleDecrease = (product) => {
  //   if (user) {
  //     setLoading(true);  // <-- loading start when decreasing qty on server
  //     fetch(`https://elara-international-server.onrender.com/cartProducts/decrease/${product._id}`, {
  //       method: "PATCH",
  //     })
  //       .then((res) => res.json())
  //       .then(() => {
  //         axios.get(`https://elara-international-server.onrender.com/cartProducts/${user.email}`)
  //           .then(res => setCartProducts(res.data))
  //           .catch(err => console.log(err));
  //       })
  //       .catch(err => console.log(err))
  //       .finally(() => setLoading(false));  // <-- loading ends here
  //   } else {
  //     const updated = decrementFromCart(product._id); // local function to decrease qty or remove
  //     setCartProducts(updated);
  //   }
  // };


  // object to pass the element
  const AuthInfo = {
    login,
    register,
    GoogleSignin,
    user,
    loading,
    logout,
  };
  return <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
