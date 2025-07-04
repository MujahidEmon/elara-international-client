import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { getCartProducts } from "../../Utils/LocalStroage";
import Swal from "sweetalert2";
import { FaImage } from "react-icons/fa";
import { CgNametag } from "react-icons/cg";

const Register = () => {
    const navigate = useNavigate();
    const { register } = useContext(AuthContext)
    const products = getCartProducts()
    const [showPass, setShowPass] = useState(false)

    
    const handleRegister = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const imageFile = form.get("image");
        const email = form.get("email");
        const password = form.get("password");

        const imgbbApiKey = "53db74273f733d00facae7fe86d074d0"; // Replace with your actual key
        const imageData = new FormData();
        imageData.append("image", imageFile);

        try {
            // ✅ Upload image to imgbb
            const imgbbRes = await axios.post(
                `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
                imageData
            );

            const imageUrl = imgbbRes.data.data.url;

            // ✅ Register user
            const res = await register(email, password);
            console.log(res.user);

            // ✅ Update profile
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: imageUrl,
            });

            // ✅ Sync local cart with DB
            await axios.post("https://elara-international-server.onrender.com/cartProducts/bulk", {
                products,
                email: res.user.email,
            });

            localStorage.removeItem("cartProducts");

            Swal.fire({
                icon: "success",
                title: "Registered Successfully",
            });

            navigate("/");
        } catch (error) {
            console.error("Registration Error:", error);
            Swal.fire({
                icon: "error",
                title: "Something went wrong",
                text: error.message || "Please try again later.",
            });
        }
    };


    return (
        <div className="flex lg:w-2/3 w-full rounded-xl my-8 lg:max-w-xl max-w-sm bg-accent  mx-auto  font-raleway justify-center ">
            <form
                onSubmit={handleRegister}
                // onSubmit={handleSubmit(onSubmit)}
                className="max-w-lg w-full px-6 py-8 mx-auto"
            >
                <div className="mb-6">
                    <h3 className="text-base-content font-rancho  text-center md:text-4xl text-3xl font-bold">
                        Register
                    </h3>
                </div>
                <div className="">
                    <div>
                        <label className="text-base-content font-rancho text-xl block font-bold mt-4">
                            Full Name
                        </label>
                        <div className="relative flex items-center">
                            <input
                                name="name"
                                type="text"
                                required
                                className="w-full text-sm text-base-content border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                                placeholder="Enter Your Name"
                            // {...register("email", { required: true })}
                            />
                            <div className="w-[18px] h-[18px] absolute right-2"><CgNametag></CgNametag></div>
                        </div>
                        {/* {errors.email && (
                    <span className="text-primary text-xs font-medium">
                        Please Enter Your Email
                    </span>
                    )} */}
                    </div>
                    <div>
                        <label className="text-base-content font-rancho text-xl block font-bold mt-4">
                            PhotoURL
                        </label>
                        <div className="relative flex items-center">
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                // required
                                className="w-full text-sm text-base-content border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                                placeholder="Give Your Photo URL"
                            // {...register("email", { required: true })}
                            />
                            <div className="w-[18px] h-[18px] absolute right-2"><FaImage></FaImage></div>
                        </div>
                        {/* {errors.email && (
                    <span className="text-primary text-xs font-medium">
                        Please Enter Your Email
                    </span>
                    )} */}
                    </div>
                    <div>
                        <label className="text-base-content font-rancho text-xl block font-bold mt-4">
                            Email
                        </label>
                        <div className="relative flex items-center">
                            <input
                                name="email"
                                type="email"
                                required
                                className="w-full text-sm text-base-content border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                                placeholder="Enter email"
                            // {...register("email", { required: true })}
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#bbb"
                                stroke="#bbb"
                                className="w-[18px] h-[18px] absolute right-2"
                                viewBox="0 0 682.667 682.667"
                            >
                                <defs>
                                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                        <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                    </clipPath>
                                </defs>
                                <g
                                    clipPath="url(#a)"
                                    transform="matrix(1.33 0 0 -1.33 0 682.667)"
                                >
                                    <path
                                        fill="none"
                                        strokeMiterlimit="10"
                                        strokeWidth="40"
                                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                                        data-original="#000000"
                                    ></path>
                                    <path
                                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                                        data-original="#000000"
                                    ></path>
                                </g>
                            </svg>
                        </div>
                        {/* {errors.email && (
                    <span className="text-primary text-xs font-medium">
                        Please Enter Your Email
                    </span>
                    )} */}
                    </div>

                    <div className="mt-4">
                        <label className="text-base-content font-rancho text-xl block font-bold ">
                            Password
                        </label>
                        <div className="relative flex items-center">
                            <input
                                name="password"
                                type={showPass ? "text" : "password"}
                                required
                                className="w-full text-sm text-base-content border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                                placeholder="Enter password"
                            // {...register("password", {
                            //   required: "Password is required",
                            //   minLength: {
                            //     value: 6,
                            //     message: "Password must be at least 6 characters",
                            //   },
                            //   validate: {
                            //     hasUppercase: (value) =>
                            //       /[A-Z]/.test(value) ||
                            //       "Must contain at least one uppercase letter",
                            //     hasLowercase: (value) =>
                            //       /[a-z]/.test(value) ||
                            //       "Must contain at least one lowercase letter",
                            //   },
                            // })}
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
                                    data-original="#000000"
                                ></path>
                            </svg>
                        </div>
                        {/* {errors.password && <p>{errors.password.message}</p>} */}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label
                                htmlFor="remember-me"
                                className="ml-1 block text-sm text-base-content"
                            >
                                Accept Terms And Conditions
                            </label>
                        </div>
                    </div>

                    <div className="mt-6">
                        {/* <button
                        to={"/login"}
                        className="w-full font-semibold rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
                    >
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative">Login</span>
                    </button> */}
                        <button className="btn font-rancho bg-[#FCAB35] text-xl w-full">Register</button>

                        <p className="text-base-content text-sm text-center mt-2">
                            Already have an account ?{" "}
                            <Link className="text-green-500 font-bold" to={"/login"}>
                                Login
                            </Link>
                        </p>
                    </div>
                </div>


            </form>
        </div>
    );
};

export default Register;