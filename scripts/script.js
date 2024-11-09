console.log("i am linked");
const userName = document.getElementsByClassName("userName")[0];
console.log(userName);
const uName = document.querySelector(".userName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const registrationForm = document.querySelector("form");
console.log(registrationForm);

if (registrationForm) {
  registrationForm.addEventListener("submit", validateRegistration);
}

registration.addEventListener("submit", validateRegistration);

function validateRegistration(evt) {
  evt.preventDefault();
}

//Function to handle registration and save user data to local storage
function registerUser(event) {
  evt.preventDefault();

  const userNameVal = validateUserName();
  if (userNameVal === false) {
    event.returnValue = false;
    return false;
  }
  if (nameVal.length < 4) {
    alert("The username must be at least four characters long.");
    uName.focus;
    return false;
  }

  const emailVal = validateEmail();
  if (
    !emailVal ||
    emailVal.indexOf("@") < 1 ||
    emailVal.lastIndexOf(".") - emailVal.indexOf("@") < 2
  ) {
    alert("Please enter a valid email.");
    email.focus();
    return false;
  }

  const emailDomain = emailVal.split("@")[1];
  if (emailDomain === "example.com") {
    alert("Email addresses from the domain 'example.com' are not allowed.)");
    email.focus();
    return false;
  }

  const passwordVal = validatePassword();
  if (!passwordVal) return false;

  const passwordVal2 = document.querySelector("#confirmPassword").value;
  if (passwordVal !== passwordVal2) {
    alert("Passwords do not match.");
    return false;
  }

  //   alert(`Name: ${nameVal}
  //         Email: ${emailVal}
  //         Password: ...that's a secret`);

  //   return true;
  // }

  function validateUserName() {
    const uName = document.querySelector(".userName"); // Ensure this selects the correct element
    const nameVal = uName.value;

    // Check user name value minimum length
    if (nameVal.length < 4) {
      alert("YThe username must be at least four characters long.");
      uName.focus();
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
      alert(
        "The username cannot contain any special characters or whitespace."
      );
      uName.focus();
      return false;
    }

    // If all validations above pass, return the username value
    return nameVal;
  }
}
