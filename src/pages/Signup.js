import React from "react";

const Signup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg lg:w-5/12  shadow-lg relative z-20 ">
        <h2 className="text-2xl font-bold mb-4">Welcome to Sign Up</h2>
        <form className="flex flex-col gap-4 mt-6 ">
          {/* input type name */}
          <div className="mb-4">
            <label className="block text-sm font-semibold" htmlFor="email">
              Name
            </label>
            <input
              type="text"
              placeholder="Your full name please..."
              name="name"
              id="name"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
            {/* input type email */}
          <div className="mb-4">
            <label className="block text-sm font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email..."
              name="email"
              id="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
            {/* input type password */}
          <div className="mb-4">
            <label htmlFor="pwd " className="text-sm font-semibold">
              Password
            </label>
            <input
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              name="password"
              type="password"
              id="pwd"
            />
          </div>
            {/* input type confirm password */}
          <div className="mb-4">
            <label htmlFor="pwd " className="text-sm font-semibold">
              Confirm Password
            </label>
            <input
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Confirm your password"
              name="confirmpassword"
              type="password"
              id="confirmpwd"
            />
          </div>
          <div>
            <button className="bg-primary-color hover:bg-gray-600 text-white font-semibold rounded-md py-2 px-4 w-full">
              Signup
            </button>
          </div>
        </form>

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Signup;
