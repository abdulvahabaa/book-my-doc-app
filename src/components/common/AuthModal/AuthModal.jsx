import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerUser, loginUser } from "@/api/authApis";
import { setLogin } from "@/redux/slices/userSlice";
import { useDispatch } from "react-redux";

const AuthModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const response = await loginUser({
          email: formData.email,
          password: formData.password,
        });
        console.log(response);
        if (response.token && response.user) {
          dispatch(
            setLogin({
              user: response.user,
              token: response.token,
              role: response.user.role,
            })
          );
          toast.success("Login successful!");
        } else {
          toast.error("Login failed!");
        }
      } else {
        await registerUser(formData);
        toast.success("Registration successful! You can now log in.");
        setIsLogin(true);
      }
      onClose();
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 w-full max-w-sm md:max-w-md relative"
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-600 dark:text-gray-300"
          onClick={onClose}
        >
          <IoClose size={24} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        {/* Form */}
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg outline-none dark:bg-gray-800 dark:text-white"
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg outline-none dark:bg-gray-800 dark:text-white"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg outline-none dark:bg-gray-800 dark:text-white"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600 transition"
            disabled={loading}
          >
            {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* OR Section */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
          <span className="px-3 text-gray-500 dark:text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        </div>

        {/* Continue with Google */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition dark:text-white">
            <FcGoogle size={20} /> Continue with Google
          </button>
        </div>

        {/* Toggle Login & Signup */}
        <p className="text-center text-sm mt-4 text-gray-600 dark:text-gray-400">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            className="text-amber-500 cursor-pointer ml-1 font-medium hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default AuthModal;
