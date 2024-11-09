console.log("i am linked");

// Select form elements using `name` attributes
const userName = document.querySelector("input[name='username']");
const email = document.querySelector("input[name='email']");
const password = document.querySelector("input[name='password']");
const confirmPassword = document.querySelector("input[name='passwordCheck']");
const terms = document.querySelector("input[name='terms']");
const registrationForm = document.querySelector("#registration");

if (registrationForm) {
  registrationForm.addEventListener("submit", registerUser);
}

// Function to validate the username
function validateUserName() {
  const nameVal = userName.value.trim().toLowerCase();

  if (nameVal === "") {
    alert("The username cannot be blank.");
    userName.focus();
    return false;
  }

  if (nameVal.length < 4) {
    alert("The username must be at least four characters long.");
    userName.focus();
    return false;
  }

  // Check for at least two unique characters
  const uniqueChars = new Set(nameVal);
  if (uniqueChars.size < 2) {
    alert("The username must contain at least two unique characters.");
    userName.focus();
    return false;
  }

  // Check for no special characters or whitespace
  const validateUsernamePattern = /^[a-zA-Z0-9]+$/;
  if (!validateUsernamePattern.test(nameVal)) {
    alert("The username cannot contain any special characters or whitespace.");
    userName.focus();
    return false;
  }

  if (localStorage.getItem(`user_${nameVal}`)) {
    alert("The username is already taken.");
    userName.focus();
    return false;
  }

  return nameVal;
}

// Function to validate email
function validateEmail() {
  const emailVal = email.value.trim().toLowerCase();

  // Check for basic email format
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(emailVal)) {
    alert("Please enter a valid email address.");
    email.focus();
    return false;
  }

  // Check if email ends with "@example.com"
  const domainPattern = /@example\.com$/;
  if (domainPattern.test(emailVal)) {
    alert("Email addresses from the domain 'example.com' are not allowed.");
    email.focus();
    return false;
  }

  return emailVal;
}

// Function to validate password
function validatePassword() {
  const passwordVal = password.value;

  if (passwordVal.length < 12) {
    alert("Passwords must be at least 12 characters long.");
    password.focus();
    return false;
  }

  if (!/[A-Z]/.test(passwordVal) || !/[a-z]/.test(passwordVal)) {
    alert(
      "Passwords must have at least one uppercase and one lowercase letter."
    );
    password.focus();
    return false;
  }

  if (!/[0-9]/.test(passwordVal)) {
    alert("Passwords must contain at least one number.");
    password.focus();
    return false;
  }

  if (!/[!@#$%^&*]/.test(passwordVal)) {
    alert("Passwords must contain at least one special character.");
    password.focus();
    return false;
  }

  if (/password/i.test(passwordVal)) {
    alert("Passwords cannot contain the word 'password'.");
    password.focus();
    return false;
  }

  if (passwordVal !== confirmPassword.value) {
    alert("Passwords do not match.");
    confirmPassword.focus();
    return false;
  }

  return passwordVal;
}

// Main function to register user and save to local storage
function registerUser(event) {
  event.preventDefault();

  const userNameVal = validateUserName();
  if (!userNameVal) return false;

  const emailVal = validateEmail();
  if (!emailVal) return false;

  const passwordVal = validatePassword();
  if (!passwordVal) return false;

  if (!terms.checked) {
    alert("You must accept the terms and conditions.");
    terms.focus();
    return false;
  }

  const userData = {
    username: userNameVal,
    email: emailVal,
    password: passwordVal, // In a real app, you'd hash the password before storing
  };

  localStorage.setItem(`user_${userNameVal}`, JSON.stringify(userData));
  alert("Registration successful!");

  registrationForm.reset();
  return true;
}
