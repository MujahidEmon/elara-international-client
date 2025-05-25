import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Home from "../../Pages/Home/Home";
import Footer from "../../Components/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";

const Root = () => {

    const {cartProducts} = useContext(AuthContext)
    return (
        <div className="font-poppins">
            <ScrollToTop></ScrollToTop>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <Home></Home> */}
            <Footer></Footer>
        </div>
    );
};

export default Root;