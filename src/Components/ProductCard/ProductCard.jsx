import { BiCartAdd } from "react-icons/bi";


const ProductCard = ({ product }) => {
  const { name, image } = product;
  return (
    <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-2xl overflow-hidden mx-auto mt-4">
      <div className="aspect-[3/2]">
        <img
          src={image}
          className="w-full h-full object-cover rounded-2xl"
          alt="Hotel"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl text-slate-900 font-bold">{name}</h3>

        <div className="mt-8 flex items-center">
          <h3 className="text-xl text-slate-900 font-bold flex-1">BDT {product.price}</h3>
          <div className="bg-pink-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
            <BiCartAdd size={20}></BiCartAdd>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
