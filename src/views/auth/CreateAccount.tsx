import React from "react";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";

const CreateAccount: React.FC = () => {
  // const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex overflow-hidden">
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
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="w-full max-w-lg px-6 py-12">
          <div className="mb-8">
            <p className="text-sm text-gray-900 font-medium mb-1">
              LET'S GET YOU STARTED
            </p>
            <h1 className="text-3xl font-semibold text-gray-900">
              Create an Account
            </h1>
          </div>
          <form className="space-y-6">
            {/* Name Field */}
            <div className="relative">
              <input
                id="name"
                type="text"
                defaultValue=""
                placeholder="Your Name"
                className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8fd32a] text-gray-900 placeholder-transparent"
              />
              <label
                htmlFor="name"
                className="absolute left-3 top-3 text-gray-400 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#8fd32a] bg-white px-1"
              >
                Your Name
              </label>
            </div>

            {/* Email Field */}
            <div className="relative">
              <input
                id="email"
                type="email"
                defaultValue=""
                placeholder="Email"
                className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8fd32a] text-gray-900 placeholder-transparent"
              />
              <label
                htmlFor="email"
                className="absolute left-3 top-3 text-gray-400 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#8fd32a] bg-white px-1"
              >
                Email
              </label>
            </div>

            {/* Password Field */}
            <div className="relative">
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8fd32a] text-gray-900 placeholder-transparent pr-12"
              />
              <label
                htmlFor="password"
                className="absolute left-3 top-3 text-gray-400 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#8fd32a] bg-white px-1"
              >
                Password
              </label>

              {/* Eye Button */}
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                tabIndex={-1}
              >
                x
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
            <div className="flex-1 h-px bg-gray-200" />
            <span className="mx-4 text-gray-400 font-semibold">Or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Social Buttons */}
          <div className="space-y-3 mb-8">
            <button className="w-full flex items-center px-4 py-3 border border-gray-200 rounded-md hover:bg-gray-50 transition">
              <FaGoogle className="text-lg mr-3 text-[#EA4335]" />
              <span className="flex-1 text-left text-gray-700 font-medium">
                Sign up with Google
              </span>
            </button>
            <button className="w-full flex items-center px-4 py-3 border border-gray-200 rounded-md hover:bg-gray-50 transition">
              <FaFacebookF className="text-lg mr-3 text-[#1877F3]" />
              <span className="flex-1 text-left text-gray-700 font-medium">
                Sign up with Facebook
              </span>
            </button>
            <button className="w-full flex items-center px-4 py-3 border border-gray-200 rounded-md hover:bg-gray-50 transition">
              <FaApple className="text-lg mr-3 text-black" />
              <span className="flex-1 text-left text-gray-700 font-medium">
                Sign up with Apple
              </span>
            </button>
          </div>

          {/* Login Link */}
          <div className="mt-6 text-center text-sm text-gray-500">
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
