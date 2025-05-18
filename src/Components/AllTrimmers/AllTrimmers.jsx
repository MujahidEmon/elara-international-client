import axios from "axios";
import { useState, useEffect } from "react";
import AllProductCard from "../AllProductCard/AllProductCard";

const AllTrimmers = () => {
    const [trimmers, setTrimmers] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://elara-international-server.onrender.com/products?category=Trimmer`);
                setTrimmers(res.data);
            } catch (err) {
                console.error("Failed to fetch trimmers:", err);
            }
        };

        fetchData();
    }, []);

    console.log(trimmers); // will show correct data after fetching

    return (
        <div>
            <div className="flex flex-col items-center text-center gap-4">
                <h1 className="text-3xl lg:text-5xl ">Choose the Best Trimmer</h1>
                <p className="max-w-2xl font-extralight">
                    Find your perfect grooming companion in seconds.
                </p>
            </div>

            {/* Example: Display trimmer names */}
            <div className="md:flex grid grid-cols-2 md:flex-row flex-wrap px-4 md:px-0 md:gap-18 gap-2  mt-12">
                {trimmers.map((item, index) => <AllProductCard product={item} key={index}></AllProductCard>)}
            </div>
        </div>
    );
};

export default AllTrimmers;
