import AllProductCard from "../AllProductCard/AllProductCard";
import useSpecificCategoryProduct from "../../Hooks/useSpecificCategoryProduct";
import LoadingSpinner from "../Loader/LoadingSpinner";

const AllTrimmers = () => {
    const { products: trimmers, isLoading, refetch } = useSpecificCategoryProduct('Trimmer');

    if (isLoading) return <LoadingSpinner></LoadingSpinner>

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
