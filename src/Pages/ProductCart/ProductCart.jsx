import { useContext } from "react";
import CartCard from "../../Components/CartCard/CartCard";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const ProductCart = () => {
  const { cartProducts, totalPrice, grandTotal } = useContext(AuthContext);

  return (
    <div className="max-w-5xl min-h-[calc(100vh-260px)] max-md:max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-base-400">Your Cart</h1>
      <div className="grid md:grid-cols-3 gap-10 mt-8">
        {/* left side */}
        <div className="md:col-span-2 space-y-4">
          {cartProducts.length==0 ? <Link className=" flex  items-center" to={'/allProducts'}><button className="btn btn-outline w-full mt-24 border-[#FCAB35] text-[#FCAB35]">Browse Product</button></Link>: cartProducts.map((product, idx) => (
            <CartCard key={idx} product={product}></CartCard>
          ))}
        </div>

        {/* Right Side */}
        <div className="bg-accent-content rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(61,63,68,0.3)]">
          <ul className="text-base-100 font-medium space-y-4">
            <li className="flex flex-wrap gap-4 text-sm">
              Subtotal{" "}
              <span className="ml-auto font-semibold">BDT {totalPrice}</span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm">
              Shipping <span className="ml-auto font-semibold">BDT 110</span>
            </li>

            <hr className="border-slate-300" />
            <li className="flex flex-wrap gap-4 text-sm font-semibold">
              Total <span className="ml-auto">BDT {grandTotal}</span>
            </li>
          </ul>

          <div className="mt-8 space-y-2">
            <button
              type="button"
              className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-[#FCAB35] hover:bg-[#fcac35dd] text-white rounded-md"
            >
              <Link to={'/checkout'}>Buy Now</Link>
            </button>
            <button
              type="button"
              className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-slate-100 text-base-100 border border-slate-300 rounded-md"
            >
              <Link to={'/allProducts'}>Continue Shopping</Link>
            </button>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <img
              src="https://readymadeui.com/images/master.webp"
              alt="card1"
              className="w-10 object-contain"
            />
            <img
              src="https://readymadeui.com/images/visa.webp"
              alt="card2"
              className="w-10 object-contain"
            />
            <img
              src="https://readymadeui.com/images/american-express.webp"
              alt="card3"
              className="w-10 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
