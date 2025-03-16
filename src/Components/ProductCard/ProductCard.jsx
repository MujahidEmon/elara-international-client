
const ProductCard = ({product}) => {
    const {name, image} = product;
    return (
        <div className=" flex-auto flex flex-col items-center justify-center w-96  ">
            <figure>
                <img
                src={product.image}
                alt="Shoes" className="border object-cover h-60" />
            </figure>
            <div className="text-center flex flex-col items-center justify-center px-8 mt-6">
                <p className="text-2xl">{product.name}</p>
                <button className="btn btn-outline border-t-0 mt-auto border-x-0 w-fit">Shop Now</button>
            </div>
        </div>
    );
};

export default ProductCard;