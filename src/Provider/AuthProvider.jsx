import { createContext } from "react";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const products = [
        {
            name: 'Hoco W35 Wireless Headphone',
            price: 1300,
            image: ''

        },
        {
            name: 'Vintage T9 Trimmer',
            price: 445,
            image: ''
        },
        {
            name: 'Xiaomi Rechargeable Trimmer',
            price: 1150,
            image: ''
        }
    ]

    const AuthInfo = {
        products,
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;