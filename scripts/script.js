form.addEventListener("submit", validate);

function validate(evt) {
  const nameVal = validateName();
  if (nameVal === false) {
    evt.returnValue = false;
    return false;
  }

  const emailVal = validateEmail();
  if (emailVal === false) {
    evt.returnValue = false;
    return false;
  }

  const countryVal = validateCountry();
  if (countryVal === false) {
    evt.returnValue = false;
    return false;
  }

  const zipVal = validateZipCode();
  if (zipVal === false) {
    evt.returnValue = false;
    return false;
  }

  const passwordVal = validatePassword();
  if (passwordVal === false) {
    evt.returnValue = false;
    return false;
  }

  alert(`Name: ${nameVal}
        Email: ${emailVal}
        Country: ${countryVal}
        Zip Code: ${zipVal}
        Password: ...that's a secret`);

  return true;
}

function validateName() {
  let nameVal = uName.value;

  if (nameVal.length === 0) {
    alert("Your name cannot be empty");
    uName.focus();
    return false;
  }

  return nameVal;
}

// Simple email validation
// Using the event object's 'returnValue' property,
// we can prevent form submission if the values are invalid
function validateEmail() {
  let emailVal = email.value;

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

  return emailVal;
}

function validateCountry() {
  let countryVal = country.value;

  if (countryVal.length === 0) {
    alert("Your country cannot be empty");
    country.focus();
    return false;
  }

  return countryVal;
}

function validateZipCode() {
  let zipVal = zip.value;

  if (zipVal.length === 0) {
    alert("Your zip code cannot be empty");
    zip.focus();
    return false;
  }

  return zipVal;
}

function validatePassword() {
  let passwordVal = password.value;

  if (passwordVal.length === 0) {
    alert("Your password cannot be empty");
    password.focus();
    return false;
  }

  return passwordVal;
}
