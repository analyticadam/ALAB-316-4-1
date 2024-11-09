console.log("i am linked");
const userName = document.getElementsByClassName("userName");
console.log(userName);

const registrationForm = document.querySelector("form");
console.log(registrationForm);

if (registrationForm) {
  registrationForm.addEventListener("submit", validateRegistration);
}

//registration.addEventListener("submit", validateRegistration);

function validateRegistration(evt) {
  evt.preventDefault();

  const userNameVal = validateUserName();
  if (userNameVal === false) {
    evt.returnValue = false;
    return false;
  }
  if (nameVal < 4) {
    evt.returnValue = false;
    return false;
  }

  const emailVal = validateEmail();
  const atpos = emailVal.indexOf("@");
  const dotpos = emailVal.lastIndexOf(".");

  if (atpos < 1) {
    alert(
      "Your email must include an @ symbol, which must not be at the beginning"
    );
    email.focus();
    return false;
  }

  if (dotpos - atpos < 2) {
    alert(
      "Invalid structure: @.\nYou must include a domain name after the @ symbol."
    );
    email.focus();
    return false;
  }

  if (emailVal === false) {
    evt.returnValue = false;
    return false;
  }
  if (emailVal !== "example.com") {
    if (passwordVal === false) {
      evt.returnValue = false;
      return false;
    }
  }

  const passwordVal = validatePassword();
  if (passwordVal === false) {
    evt.returnValue = false;
    return false;
  }
  if (passwordVal !== nameVal) {
    evt.returnValue = false;
    return false;
  }
  if (passwordVal === passwordVal2) {
    evt.returnValue = true;
    return false;
  }
  const passwordVal2 = validatePassword();
  if (passwordVal2 === false) {
    evt.returnValue = false;
    return false;
  }

  if (passwordVal2 === passwordVal2) {
    evt.returnValue = true;
    return true;
  }
  alert(`Name: ${nameVal}
        Email: ${emailVal}
        Password: ...that's a secret`);

  return true;
}

function validateUserName() {
  let nameVal = uName.value;
  if (nameVal.length === 0) {
    alert("Your name cannot be empty");
    uName.focus();
    return false;
  }
  return nameVal;
}

//login.addEventListener("submit", validate);

function validatelogin(evt) {
  evt.preventDefault();
  const nameVal = validateName();
  if (nameVal === false) {
    evt.returnValue = false;
    return false;
  }

  let passwordVal = password.value;

  if (passwordVal.length === 0) {
    alert("Your password cannot be empty");
    password.focus();
    return false;
  }

  return passwordVal;
}

function findUnique(str) {
  // The variable that contains the unique values
  let uniq = "";

  for (let i = 0; i < str.length; i++) {
    // Checking if the uniq contains the character
    if (uniq.includes(str[i]) === false) {
      // If the character not present in uniq
      // Concatenate the character with uniq
      uniq += str[i];
    }
  }
  return uniq;
}
