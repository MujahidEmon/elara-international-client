import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Home from "../../Pages/Home/Home";
import Footer from "../../Components/Footer/Footer";

const Root = () => {
    return (
        <div className="font-poppins">
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <Home></Home> */}
            <Footer></Footer>
        </div>
    );
};

export default Root;