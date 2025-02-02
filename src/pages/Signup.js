import React, { useState, useRef } from "react";
import { USER_AVATAR } from "../utils/constants";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { checkFullNameValid, checkValidCredentials } from "../utils/validate";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../features/userSlice";

const Signup = ({ onClose }) => {
  const [errorInCredMessage, setErrorInCredMessage] = useState(null);
  const [errorInNameMessage, setErrorInNameMessage] = useState(null);

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateInputs = () => {
    const credError = checkValidCredentials(
      email.current.value,
      password.current.value
    );
    const nameError = checkFullNameValid(fullName.current.value);

    const confirmPassword = document.getElementById("confirmpwd").value;
    const passwordMatchError =
      password.current.value !== confirmPassword
        ? "Passwords do not match."
        : null;

    setErrorInCredMessage(credError || passwordMatchError);
    setErrorInNameMessage(nameError);

    return { credError: credError || passwordMatchError, nameError };
  };

  //signup
  const signUpUser = async () => {
    console.log("Email:", email.current.value);
    console.log("Password:", password.current.value);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      );
      const user = userCredential.user;
      if (!user) {
        throw new Error("User creation failed. Please try again.");
      }
      console.log("Successfully signed up:", user);

      //Update profile
      await updateProfile(user, {
        displayName: fullName.current.value,
        photoURL: USER_AVATAR,
      });
      // Profile updated!
      console.log("Profile updated successfully");
      
      // Destructure the updated user information
      const { uid, email: userEmail, displayName, photoURL } = auth.currentUser;
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
      console.error("Error signing up or updating profile:", error.message);
      setErrorInCredMessage(error.message);
    }
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
    signUpUser();
  };

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
              ref={fullName}
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
              ref={email}
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
              ref={password}
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
            <button
              onClick={handleButtonClick}
              className="bg-primary-color hover:bg-gray-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              Signup
            </button>
          </div>
          <p className="text-red-700 font-bold py-2 m-4">
            {errorInCredMessage && <span>{errorInCredMessage}</span>}
            {errorInNameMessage && <span>{errorInNameMessage}</span>}
          </p>
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
