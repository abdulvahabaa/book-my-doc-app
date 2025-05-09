import { loginDoctor, registerDoctor } from "@/api/authApis";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setDocLogin } from "@/redux/slices/doctorSlice";
import { useNavigate } from "react-router-dom";

export function AuthForm({ className, ...props }) {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [signupSuccess, setSignupSuccess] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignup) {
      console.log("Signing up user:", formData);
      const response = await registerDoctor(formData);
      console.log(response);
      toast.success("Registration successful! You can now log in.");

      // Reset input fields
      setFormData({ name: "", email: "", password: "" });

      setSignupSuccess(true);
      setIsSignup(false);
    } else {
      console.log("Logging in user:", formData);
      const response = await loginDoctor({
        email: formData.email,
        password: formData.password,
      });
      console.log(response);
      if (response.token && response.doctor) {
        dispatch(
          setDocLogin({
            doctor: response.doctor,
            token: response.token,
            role: response.doctor.role,
          })
        );
        toast.success("Login successful!");
        navigate("/doctor/dashboard");
      } else {
        toast.error("Login failed!");
      }
    }
  };

  useEffect(() => {
    if (signupSuccess) {
      setFormData({ name: "", email: "", password: "" });
    }
  }, [signupSuccess]);

  return (
    <div className={`flex flex-col gap-6 ${className}`} {...props}>
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
        <div className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8 w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              {/* Heading */}
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {isSignup ? "Create an Account" : "Welcome Back"}
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  {isSignup
                    ? "Sign up to get started"
                    : "Login to your account"}
                </p>
              </div>

              {/* Name Input (Signup Only) */}
              {isSignup && (
                <div className="grid gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500"
                    onChange={handleChange}
                    value={formData.name} // Ensure input resets
                  />
                </div>
              )}

              {/* Email Input */}
              <div className="grid gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="doctor@example.com"
                  required
                  className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                  value={formData.email} // Ensure input resets
                />
              </div>

              {/* Password Input */}
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Password
                  </label>
                  {!isSignup && (
                    <a
                      href="#"
                      className="text-sm text-blue-500 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  )}
                </div>
                <input
                  id="password"
                  type="password"
                  name="password"
                  required
                  className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                  value={formData.password} // Ensure input resets
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full p-2 text-white bg-violet-600 rounded-md hover:bg-violet-700 transition"
                >
                  {isSignup ? "Sign Up" : "Login"}
                </button>
                <div className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                  {isSignup ? (
                    <>
                      Already have an account?{" "}
                      <button
                        type="button"
                        onClick={() => setIsSignup(false)}
                        className="text-blue-500 hover:underline"
                      >
                        Log in
                      </button>
                    </>
                  ) : (
                    <>
                      Don’t have an account?{" "}
                      <button
                        type="button"
                        onClick={() => setIsSignup(true)}
                        className="text-blue-500 hover:underline"
                      >
                        Sign up
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Divider */}
              <div className="relative text-center text-sm text-gray-500 dark:text-gray-400 before:absolute before:inset-0 before:top-1/2 before:border-t before:border-gray-300">
                <span className="relative z-10 bg-white dark:bg-gray-900 px-2">
                  Or
                </span>
              </div>

              {/* Google Auth */}
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition dark:text-white">
                  <FcGoogle size={20} /> Continue with Google
                </button>
              </div>
            </div>
          </form>

          {/* Image Section */}
          <div className="relative hidden bg-gray-100 dark:bg-gray-800 md:block">
            <img
              src="/images/doctor-panel.png"
              alt="Doctor Login"
              className="absolute inset-0 h-full w-full object-cover dark:opacity-50"
            />
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="text-center text-xs text-gray-500 dark:text-gray-400">
        By {isSignup ? "signing up" : "logging in"}, you agree to our{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
}

export default AuthForm;
