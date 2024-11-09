console.log("i am linked");
const userName = document.querySelector(".userName");
console.log(userName);
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const terms = document.querySelector("#terms");
const registrationForm = document.querySelector("#registrationForm");
console.log(registrationForm);

if (registrationForm) {
  registrationForm.addEventListener("submit", Registration);
}

function validateUserName() {
  const nameVal = userName.value.toLowerCase();

  if (nameVal === "") {
    alert("The username cannot be blank.");
    userName.focus();
    return false;
  }

  if (nameVal.length < 4) {
    alert("The username must be at least four characters long.");
    userName.focus;
    return false;
  }

  // Check for at least two unique characters
  const uniqueChars = new Set(NameVal);
  if (uniqueChars.size < 2) {
    alert("The username must contain at least two unique characters.");
    uName.focus();
    return false;
  }

  // Check for no special characters or whitespace
  const validateuUsernamePattern = /^[a-zA-Z0-9]+$/;
  if (!validateuUsernamePattern.test(nameVal)) {
    alert("The username cannot contain any special characters or whitespace.");
    uName.focus();
    return false;
  }

  if (localStorage.getItem(`user_${nameVal}`)) {
    alert("The user name is already taken.");
    return false;
  }

  return nameVal;
}

// Function to validate email
function validateEmail() {
  const emailVal = email.value.trim().toLowerCase();

  // Basic email pattern for validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Check if the email matches the pattern
  if (!emailPattern.test(emailVal)) {
    alert("Please enter a valid email address.");
    email.focus();
    return false;
  }

  // Check for restricted domain "example.com"
  const emailDomain = emailVal.split("@")[1];
  if (emailDomain === "example.com") {
    alert("Email addresses from the domain 'example.com' are not allowed.");
    email.focus();
    return false;
  }

  return emailVal; // Return the validated email if all checks pass
}

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

  if (passwordVal.includes(userName.value)) {
    alert("Passwords cannot contain the username.");
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

// Login Form Validation Functions
const loginForm = document.querySelector("#loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", validateLogin);
}

function validateLogin(event) {
  event.preventDefault();

  const loginUsername = document
    .querySelector("#loginUsername")
    .value.toLowerCase();
  const loginPassword = document.querySelector("#loginPassword").value;
  const keepLoggedIn = document.querySelector("#keepLoggedIn").checked;

  if (!loginUsername) {
    alert("The username cannot be blank.");
    document.querySelector("#loginUsername").focus();
    return false;
  }

  const storedUser = localStorage.getItem(`user_${loginUsername}`);
  if (!storedUser) {
    alert("Username does not exist.");
    document.querySelector("#loginUsername").focus();
    return false;
  }

  const userData = JSON.parse(storedUser);
  if (userData.password !== loginPassword) {
    alert("Incorrect password.");
    document.querySelector("#loginPassword").focus();
    return false;
  }

  alert(
    `Login successful!${keepLoggedIn ? " You will remain logged in." : ""}`
  );
  loginForm.reset();
  return true;
}
