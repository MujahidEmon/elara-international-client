import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const PrivateRoutes = ({children}) => {
    const location = useLocation()
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <ClipLoader></ClipLoader>
    }
    if(user){
        return children
    }
    return <Navigate to={'/login'} state={location.pathname} replace='true'></Navigate>
};

export default PrivateRoutes;