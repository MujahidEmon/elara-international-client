import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
import { getCartProducts } from '../../Utils/LocalStroage';

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        try {
            // Call your login function
            const res = await login(email, password);
            const user = res.user;

            // Fetch local cart products synchronously from localStorage or your store
            const products = getCartProducts(); // Assuming this returns array of product objects

            // Only send to backend if products array exists and has length > 0
            if (products && products.length > 0) {
                try {
                    // Make sure each product has _id or productId (needed by backend)
                    const formattedProducts = products.map((p) => ({
                        ...p,
                        // Ensure productId field exists for backend to process correctly
                        productId: p._id || p.productId || p.id,
                    }));

                    await axios.post('http://localhost:5000/cartProducts/bulk', {
                        email: user.email,
                        products: formattedProducts,
                    });

                    // Remove local cart only if server sync is successful
                    localStorage.removeItem('cartProducts');
                    console.log("Products synced with server");
                } catch (syncError) {
                    console.error("Failed to sync cart products with server:", syncError);
                    // Optional: Show error to user or keep local cart intact for retry
                }
            }

            Swal.fire({
                icon: "success",
                title: "Logged in",
            });

            navigate('/');
        } catch (error) {
            console.error("Login failed:", error);
            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: error.message || "Something went wrong",
            });
        }
    };


    return (
        <div className="flex  w-full mb-12 md:rounded-xl rounded-lg lg:max-w-xl max-w-sm bg-accent mx-auto font-raleway justify-center">
            <form onSubmit={handleLogin} className="max-w-lg w-full px-6 py-8 mx-auto">
                <div className="mb-6">
                    <h3 className="text-base-400 font-rancho text-center text-4xl font-bold">
                        Login
                    </h3>
                </div>

                <div>
                    <label className="text-base-400 font-rancho text-2xl block font-bold mt-4">
                        Email
                    </label>
                    <div className="relative flex items-center">
                        <input
                            name="email"
                            type="email"
                            required
                            className="w-full text-sm text-base-400 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                            placeholder="Enter email"
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <label className="text-base-400 font-rancho text-2xl block font-bold">
                        Password
                    </label>
                    <div className="relative flex items-center">
                        <input
                            name="password"
                            type={showPass ? "text" : "password"}
                            required
                            className="w-full text-sm text-base-400 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                            placeholder="Enter password"
                        />
                        <svg
                            onClick={() => setShowPass(!showPass)}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#bbb"
                            stroke="#bbb"
                            className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                            viewBox="0 0 128 128"
                        >
                            <path
                                d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                            ></path>
                        </svg>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                        <label htmlFor="remember-me" className="ml-1 block text-sm text-base-400">
                            Remember Me
                        </label>
                    </div>
                </div>

                <div className="mt-6">
                    <button className="btn font-rancho bg-[#FCAB35] text-xl w-full">Login</button>
                    <p className="text-base-400 text-sm text-center mt-2">
                        Don't have an account?{" "}
                        <Link className="text-green-500 font-bold" to={"/register"}>
                            Register
                        </Link>
                    </p>
                </div>

                <div className="my-4 flex items-center gap-4">
                    <hr className="w-full border-gray-300" />
                    <p className="text-sm text-base-400 text-center">or</p>
                    <hr className="w-full border-gray-300" />
                </div>

                <div className="flex items-center gap-6 justify-center">
                    <button className="btn btn-circle">
                        <FaGoogle size={30} />
                    </button>
                    <button className="btn btn-circle">
                        <FaGithub size={30} />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
