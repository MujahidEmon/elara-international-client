import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import axios from "axios";

// creating context to access the data from the whole app
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tokenReady, setTokenReady] = useState(false)
  const googleProvider = new GoogleAuthProvider();


  // function for firebase login
  const login = async (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
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
  const logout = async () => {
    setLoading(true)
    await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
      withCredentials: true,
    })
    setTokenReady(false)
    return signOut(auth)
  }


  // token related function
  const getToken = async (email) => {
    const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`, { email }, { withCredentials: true });
    console.log(data);
    setTokenReady(true)
    return data;
  }




  // updating user info and loading state properly
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        getToken(currentUser?.email);
      }
      else{
        setTokenReady(false)
      }
      setLoading(false); // <-- loading ends here after auth state check
    });

    return () => unSubscribe();
  }, []);


  // object to pass the element
  const AuthInfo = {
    login,
    register,
    GoogleSignin,
    user,
    loading,
    logout,
    tokenReady
  };
  return <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
