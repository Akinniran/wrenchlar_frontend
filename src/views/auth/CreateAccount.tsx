import React, { useState } from "react";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";

const CreateAccount: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  return (
    <div className="min-h-screen flex overflow-hidden bg-white dark:bg-gray-900">
      {/* Left Section */}
      <div className="md:flex w-1/2 bg-gradient-to-br from-[#4e6e1f] to-[#2e3c1a] relative items-center justify-center">
        <div className="absolute inset-0 bg-[url('/images/bg-pattern.png')] opacity-30" />
        <div className="relative z-10 px-12">
          <div className="flex items-center mb-8">
            <span className="text-4xl font-extrabold text-white mr-2">
              <span className="text-[#8fd32a]">W</span>
              renchlar
            </span>
          </div>
          <h2 className="text-white text-2xl font-bold mb-4">
            Building the Future...
          </h2>
          <p className="text-white text-opacity-80 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex space-x-2">
            <span className="w-8 h-1 rounded bg-white" />
            <span className="w-4 h-1 rounded bg-white/40" />
            <span className="w-4 h-1 rounded bg-white/40" />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="w-full max-w-lg px-6 py-12">
          <div className="mb-8">
            <p className="text-sm text-gray-900 dark:text-gray-100 font-medium mb-1">
              LET'S GET YOU STARTED
            </p>
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
              Create an Account
            </h1>
          </div>
          <form className="space-y-6">
            {/* Name Field */}
            <div className="relative">
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setNameFocused(true)}
                onBlur={() => setNameFocused(false)}
                placeholder="Your Name"
                className="peer w-full px-4 pt-5 pb-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8fd32a] text-gray-900 dark:text-white placeholder-transparent bg-white dark:bg-gray-800"
              />
              <label
                htmlFor="name"
                className={`absolute left-3 text-gray-400 dark:text-gray-300 transition-all bg-white dark:bg-gray-800 px-1 ${
                  name || nameFocused 
                    ? '-top-2 text-sm text-[#8fd32a]' 
                    : 'top-5 text-base'
                }`}
              >
                Your Name
              </label>
            </div>

            {/* Email Field */}
            <div className="relative">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                placeholder="Email"
                className="peer w-full px-4 pt-5 pb-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8fd32a] text-gray-900 dark:text-white placeholder-transparent bg-white dark:bg-gray-800"
              />
              <label
                htmlFor="email"
                className={`absolute left-3 text-gray-400 dark:text-gray-300 transition-all bg-white dark:bg-gray-800 px-1 ${
                  email || emailFocused 
                    ? '-top-2 text-sm text-[#8fd32a]' 
                    : 'top-5 text-base'
                }`}
              >
                Email
              </label>
            </div>

            {/* Password Field */}
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
                placeholder="Password"
                className="peer w-full px-4 pt-5 pb-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8fd32a] text-gray-900 dark:text-white placeholder-transparent pr-12 bg-white dark:bg-gray-800"
              />
              <label
                htmlFor="password"
                className={`absolute left-3 text-gray-400 dark:text-gray-300 transition-all bg-white dark:bg-gray-800 px-1 ${
                  password || passwordFocused 
                    ? '-top-2 text-sm text-[#8fd32a]' 
                    : 'top-5 text-base'
                }`}
              >
                Password
              </label>

              {/* Eye Button */}
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300"
                tabIndex={-1}
                onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? (
                  // Eye open icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm7.938-2.675A9.956 9.956 0 0022 9c0 5.523-4.477 10-10 10-1.657 0-3.236-.336-4.675-.938M3.515 3.515l16.97 16.97"
                    />
                  </svg>
                ) : (
                  // Eye closed icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.657.336-3.236.938-4.675M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-5 bg-[#8fd32a] hover:bg-[#7bb022] text-white font-bold rounded-md transition"
            >
              GET STARTED
            </button>
          </form>

          

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
            <span className="mx-4 text-gray-400 dark:text-gray-300 font-semibold">Or</span>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
          </div>

          {/* Social Buttons */}
          <div className="space-y-3 mb-8">
            <button className="w-full flex items-center px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition bg-white dark:bg-gray-900">
              <FaGoogle className="text-lg mr-3 text-[#EA4335]" />
              <span className="flex-1 text-left text-gray-700 dark:text-gray-300 font-medium">
                Sign up with Google
              </span>
            </button>
            <button className="w-full flex items-center px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition bg-white dark:bg-gray-900">
              <FaFacebookF className="text-lg mr-3 text-[#1877F3]" />
              <span className="flex-1 text-left text-gray-700 dark:text-gray-300 font-medium">
                Sign up with Facebook
              </span>
            </button>
            <button className="w-full flex items-center px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition bg-white dark:bg-gray-900">
              <FaApple className="text-lg mr-3 text-black dark:text-white" />
              <span className="flex-1 text-left text-gray-700 dark:text-gray-300 font-medium">
                Sign up with Apple
              </span>
            </button>
          </div>

          {/* Login Link */}
          <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-[#8fd32a] font-semibold hover:underline"
            >
              LOGIN HERE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
