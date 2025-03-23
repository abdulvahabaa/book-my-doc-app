import React from "react";
import { FcGoogle } from "react-icons/fc";

export function LoginForm({ className, ...props }) {
  return (
    <div className={`flex flex-col gap-6 ${className}`} {...props}>
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
        <div className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8 w-full">
            <div className="flex flex-col gap-6">
              {/* Heading */}
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Welcome back Doctor
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Login to your account
                </p>
              </div>

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
                  placeholder="doctor@example.com"
                  required
                  className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500"
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
                  <a href="#" className="text-sm text-blue-500 hover:underline">
                    Forgot your password?
                  </a>
                </div>
                <input
                  id="password"
                  type="password"
                  required
                  className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full p-2 text-white bg-violet-600 rounded-md hover:bg-violet-700 transition"
              >
                Login
              </button>

              {/* Divider */}
              <div className="relative text-center text-sm text-gray-500 dark:text-gray-400 before:absolute before:inset-0 before:top-1/2 before:border-t before:border-gray-300">
                <span className="relative z-10 bg-white dark:bg-gray-900 px-2">
                  Or 
                </span>
              </div>

              {/* Social Login Buttons */}
              {/* <div className="grid grid-cols-3 gap-4">
                <button className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                  🍎
                  <span className="sr-only">Login with Apple</span>
                </button>
                <button className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                  🔵
                  <span className="sr-only">Login with Google</span>
                </button>
                <button className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                  🔗
                  <span className="sr-only">Login with Meta</span>
                </button>
              </div> */}

                 <div className="space-y-3">
                        <button className="w-full flex items-center justify-center gap-2 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition dark:text-white">
                          <FcGoogle size={20} /> Continue with Google
                        </button>
                      </div>

              {/* Sign Up Link */}
              <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                Don’t have an account?{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Sign up
                </a>
              </div>
            </div>
          </form>

          {/* Image Section (Hidden on Small Screens) */}
          <div className="relative hidden bg-gray-100 dark:bg-gray-800 md:block">
            <img
                src="/public/images/doctor-symbol.jpg"
                alt="Image"
                className="absolute inset-0 h-full w-full object-cover dark:opacity-50"
              />
            {/* <img
              src="/public/images/doctor-symbol.jpg"
              alt="Image"
              className="object-contain rounded-lg shadow-md dark:opacity-80 w-full h-full"
            /> */}
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="text-center text-xs text-gray-500 dark:text-gray-400">
        By clicking continue, you agree to our{" "}
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

export default LoginForm;
