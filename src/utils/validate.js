export const checkValidCredentials = (email, password) => {
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  if (!email) {
    return "Please enter your email address.";
  }
  if (!emailRegex.test(email)) {
    return "Please enter a valid email address.";
  }

  // Validate password presence and format
  const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;
  if (!password) {
    return "Please enter your password.";
  }
  if (!passwordRegex.test(password)) {
    return "Password must be 8-16 characters long and include at least one number, one uppercase letter, one lowercase letter, and one special character.";
  }

  // Return null if both are valid
  return null;
};

export const checkFullNameValid = (fullName) => {
  // Validate full name presence and format
  const fullNameRegex = /^[a-zA-Z]+(([ ][a-zA-Z ])?[a-zA-Z]*)*$/; // Allows letters and spaces only
  if (!fullName) {
    return "Please enter your full name.";
  }
  if (!fullNameRegex.test(fullName)) {
    return "Please enter a valid full name (letters and spaces only).";
  }

  // Return null if valid
  return null;
};
