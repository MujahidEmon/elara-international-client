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
  decrementFromCart,
  deleteFromCart,
  getCartProducts,
  incrementFromCart,
  saveToCart,
} from "../Utils/LocalStroage";
import axios from "axios";
import toast from "react-hot-toast";

// creating context to access the data from the whole app
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const googleProvider = new GoogleAuthProvider();
  const productUrl = 'https://elara-international-server.onrender.com/products';
  const cartProductUrl = 'https://elara-international-server.onrender.com/cartProducts';

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

  // updating user info and loading state properly
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);  // <-- loading ends here after auth state check
    });

    return () => unSubscribe();
  }, []);

  // useEffect to load all products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);  // <-- loading start when fetching products
      try {
        const res = await fetch(productUrl);
        const data = await res.json();
        setAllProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);  // <-- loading ends after products fetched
      }
    };
    fetchProducts();
  }, [productUrl]);

  // useEffect to load cart products from server or localstorage
  useEffect(() => {
    const fetchCartProducts = async () => {
      setLoading(true);  // <-- loading start when fetching cart products
      try {
        const res = await fetch(cartProductUrl);
        const data = await res.json();
        setCartProducts(data);
      } catch (error) {
        console.error("Failed to fetch cart products", error);
      } finally {
        setLoading(false);  // <-- loading ends after cart products fetched
      }
    };
    fetchCartProducts();
  }, [cartProductUrl]);

  // load the cart products based on logged-in user or local storage
  useEffect(() => {
    if (user) {
      setLoading(true);  // <-- loading start when fetching user's cart
      // Logged-in user => fetch from DB
      axios.get(`https://elara-international-server.onrender.com/cartProducts/${user.email}`)
        .then(res => setCartProducts(res.data))
        .catch(err => console.log(err))
        .finally(() => setLoading(false));  // <-- loading ends here
    } else {
      // No user => fetch from localStorage (no loading for local)
      const products = getCartProducts();
      setCartProducts(products);
    }
  }, [user]);

  // function for add to cart and stored in local storage or server
  const handleAddToCart = (product) => {
    if (user && user.email) {
      setLoading(true);  // <-- loading start when adding to cart on server
      fetch('https://elara-international-server.onrender.com/cartProducts/bulk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          products: [
            {
              productId: product._id || product.id,
              name: product.name,
              price: product.price,
              photo: product.photo,
              quantity: 1,
            },
          ],
        }),
      })
        .then(res => res.json())
        .then(async (data) => {
          toast.success("Added to cart");

          // Fetch updated cart data from backend and update state
          const res2 = await fetch(`https://elara-international-server.onrender.com/cartProducts/${user.email}`);
          const updatedCart = await res2.json();
          setCartProducts(updatedCart);  // Live update here
        })
        .catch(err => {
          console.error("Error adding to server cart:", err);
        })
        .finally(() => setLoading(false));  // <-- loading ends here after add to cart
    } else {
      saveToCart(product);
      const products = getCartProducts();
      setCartProducts(products);
    }
  };

  // remove cart products and also from local storage
  const handleRemoveFromCart = (_id) => {
    if (user) {
      setLoading(true);  // <-- loading start when removing from server cart
      fetch(`https://elara-international-server.onrender.com/cartProducts/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => {
          axios.get(`https://elara-international-server.onrender.com/cartProducts/${user.email}`)
            .then(res => setCartProducts(res.data));
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false));  // <-- loading ends here after removal
    } else {
      deleteFromCart(_id);
      const products = getCartProducts();
      setCartProducts(products);
    }
  };

  const handleIncrease = (product) => {
    if (user) {
      setLoading(true);  // <-- loading start when increasing qty on server
      fetch(`https://elara-international-server.onrender.com/cartProducts/increase/${product._id}`, {
        method: "PATCH",
      })
        .then((res) => res.json())
        .then(() => {
          axios.get(`https://elara-international-server.onrender.com/cartProducts/${user.email}`)
            .then(res => setCartProducts(res.data))
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false));  // <-- loading ends here
    } else {
      const updated = incrementFromCart(product._id); // local function to increase qty
      setCartProducts(updated);
    }
  };

  const handleDecrease = (product) => {
    if (user) {
      setLoading(true);  // <-- loading start when decreasing qty on server
      fetch(`https://elara-international-server.onrender.com/cartProducts/decrease/${product._id}`, {
        method: "PATCH",
      })
        .then((res) => res.json())
        .then(() => {
          axios.get(`https://elara-international-server.onrender.com/cartProducts/${user.email}`)
            .then(res => setCartProducts(res.data))
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false));  // <-- loading ends here
    } else {
      const updated = decrementFromCart(product._id); // local function to decrease qty or remove
      setCartProducts(updated);
    }
  };

  // function to find the total bill from the cart products
  const totalPrice = cartProducts.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.quantity),
    0
  );
  const grandTotal = totalPrice + 120;

  // object to pass the element
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
    allProducts,
    handleDecrease,
    handleIncrease,
  };
  return <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
