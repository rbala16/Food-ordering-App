import React, { useRef, useState } from "react";
import Signup from "./Signup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { checkFullNameValid, checkValidCredentials } from "../utils/validate";
import { addUser } from "../features/userSlice";

const Login = () => {
 
  const [showSignUp, setShowSignUp] = useState(false);
  const [errorInCredMessage, setErrorInCredMessage] = useState(null);
  const [errorInNameMessage, setErrorInNameMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  //validate Inputs
  const validateInputs = () => {
    const credError = checkValidCredentials(
      email.current.value,
      password.current.value
    );
 setErrorInCredMessage(credError);
   return { credError};
  };

  //signin
  const signInUser = async () => {
    setLoading(true);
    try {
      // console.log("Email:", email.current.value);
      // console.log("Password:", password.current.value);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      );
      const user = userCredential.user;
      console.log("User logged in:", user);
      const { uid, email: userEmail, displayName, photoURL } = user;
      dispatch(
        addUser({
          uid: uid,
          email: userEmail,
          displayName: displayName,
          photoURL: photoURL,
        })
      );
      navigate("/restaurants");
    } catch (error) {
      console.error("Error logging in:", error.message);
      setErrorInCredMessage(error.message);
    }
    setLoading(false);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    // Validate inputs and update error states
    const { credError, nameError } = validateInputs();
    // Prevent submission if validation fails
    if (credError || nameError) {
      setErrorInCredMessage(credError);
      setErrorInNameMessage(nameError);
      return;
    }
    
    signInUser();
    
  };

  return (
    <div className="relative bg-gray-100 min-h-screen flex box-border justify-center items-center ">
      <div
        className={`justify-center items-center ${
          showSignUp ? "bg-gray-100 blur-sm" : "bg-gray-100"
        }`}
      >
        {/* Main container */}
        <div className="flex flex-col md:flex-row bg-white rounded-2xl md:w-[800px] md:h-[600px]  shadow-lg ">
          {/* Left side login page */}
          <div className="md:w-1/2 hidden md:block">
            <div className="bg-loginImg h-full rounded-tl-2xl md:rounded-l-2xl  bg-cover bg-center shadow-md"></div>
          </div>
          {/* Right side login page */}
          <div className="w-full md:w-1/2 p-6 md:p-8 rounded-tr-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-left ">
              Login:
            </h2>
            <form className="flex flex-col gap-4 mt-6">
              <div className="mb-4">
                <label className="block text-sm font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  ref={email}
                  placeholder="Your Email..."
                  name="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="pwd " className="text-sm font-semibold">
                  Password
                </label>
                <input
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  placeholder="Enter your password"
                  name="password"
                  type="password"
                  ref={password}
                  id="pwd"
                />
              </div>
              <p className="text-sm text-red-600 font-medium">
                {errorInCredMessage && <span>{errorInCredMessage}</span>}
                </p>
              <div>
              <button
                onClick={handleButtonClick}
                disabled={loading}
                className="bg-primary-color hover:bg-gray-600 text-white font-semibold rounded-md py-2 px-4 w-full"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
              </div>
            </form>
            {/* Link to open Sign Up Modal */}
            <div className="text-center mt-4">
              <span className="text-sm mt-2 text-gray-700 py-2">
                {" "}
                Don't have an account yet? ..
              </span>
              <button
                onClick={() => setShowSignUp(true)}
                className="primary-color font-semibold hover:underline ml-2"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Sign Up Modal */}
      {showSignUp && <Signup onClose={() => setShowSignUp(false)} />}
    </div>
  );
};

export default Login;
