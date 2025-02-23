import { CiDeliveryTruck } from "react-icons/ci";
import { GiPriceTag } from "react-icons/gi";
import { LuReplace } from "react-icons/lu";

const Services = () => {
    return (
        <div className="bg-[#FCAB35] py-5 flex justify-around items-center text-white font-bold text-xl">
            <div className="flex justify-center items-center gap-3">
                <CiDeliveryTruck></CiDeliveryTruck>
                <p>Free Shipping</p>
            </div>
            <div className="flex justify-center items-center gap-3">
                <LuReplace></LuReplace>
                <p>7 Days Replacement</p>
            </div>
            <div className="flex justify-center items-center gap-3">
                <GiPriceTag></GiPriceTag>
                <p>Best Price with Quality</p>
            </div>
        </div>
    );
};

export default Services;