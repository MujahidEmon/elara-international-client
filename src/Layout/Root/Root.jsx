import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Home from "../../Pages/Home/Home";

const Root = () => {
    return (
        <div className="font-poppins">
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <Home></Home> */}
        </div>
    );
};

export default Root;