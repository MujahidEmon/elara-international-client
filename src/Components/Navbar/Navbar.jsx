import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {

  // importing logout function
  const { logout, user, cartProducts, totalPrice } = useContext(AuthContext);
  // const products = getCartProducts()
  // console.log(user.photoURL);
  const handleLogout = () => {
    logout()
      .then(

    )
      .catch(error => console.error(error)
      )
  }

  return (
    <div className="navbar sticky top-0 z-50 backdrop-blur-md bg-white/20 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink className={({ isActive }) =>
              isActive
                ? " text-white font-semibold px-4 py-2 bg-[#FCAB35]"
                : " text-white px-4 py-2 hover:text-[#FCAB35] transition duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#FCAB35] after:w-0 hover:after:w-full after:transition-all after:duration-300"
            } to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) =>
              isActive
                ? " text-white font-semibold px-4 py-2 bg-[#FCAB35]"
                : " text-white px-4 py-2 hover:text-[#FCAB35] transition duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#FCAB35] after:w-0 hover:after:w-full after:transition-all after:duration-300"
            } to={'/allProducts'}>All Products</NavLink>
            </li>
            <li>
              <NavLink className="text-white px-4 py-2 hover:text-[#FCAB35] transition duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#FCAB35] after:w-0 hover:after:w-full after:transition-all after:duration-300">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <Link to={'/'} className="btn bg-transparent border-0 ml-0 pl-0 md:pl-auto md:text-xl text-base"><span className="text-[#FCAB35]">Elara</span> International</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          className="menu menu-horizontal px-1"
        >
          <li>
            <NavLink className={({ isActive }) =>
              isActive
                ? " text-white font-semibold px-4 py-2 bg-[#FCAB35]"
                : " text-white px-4 py-2 hover:text-[#FCAB35] transition duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#FCAB35] after:w-0 hover:after:w-full after:transition-all after:duration-300"
            }
              to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
              isActive
                ? " text-white font-semibold px-4 py-2 bg-[#FCAB35]"
                : " text-white px-4 py-2 hover:text-[#FCAB35] transition duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#FCAB35] after:w-0 hover:after:w-full after:transition-all after:duration-300"
            }
              to={'/allProducts'}>All Products</NavLink>
          </li>
          <li>
            <NavLink className="text-white px-4 py-2 hover:text-[#FCAB35] transition duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#FCAB35] after:w-0 hover:after:w-full after:transition-all after:duration-300">Contact Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm bg-accent rounded-sm indicator-item">{cartProducts.length}</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg text-[#FCAB35] font-bold">{cartProducts.length} Items</span>
              <span className="text-[#FCAB35]">Subtotal: BDT {totalPrice}</span>
              <div className="card-actions">
                <Link to={'/cart'} className="btn border-[#FCAB35] text-[#FCAB35] btn-outline">View cart</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          {
            user ? <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost ml-4 btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user ? user?.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                />
              </div>
            </div> : <Link to={'/login'}><button className="btn bg-[#FCAB35] border-0 ml-3 text-black rounded-sm">Login</button></Link>
          }
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-content rounded-sm z-[1] mt-3 w-36 p-2 shadow"
          >
            {/* <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li> */}
            {/* <h1 className="font-semibold lg:flex hidden mr-3">{user?.displayName}</h1> */}
            <li>
              {user ? <button className="text-black text-base font-semibold px-2 py-2  transition duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-black after:w-0 hover:after:w-full after:transition-all after:duration-300" onClick={handleLogout}>Logout</button> : <Link to={'/login'}>Login</Link>}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
