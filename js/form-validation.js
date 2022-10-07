function validate() {
  if (document.pregistForm.emailInput.value.length < 6) {
    alert("Please provide valid email");
    document.pregistForm.emailInput.focus();
    return false;
  }
  if (document.pregistForm.usernameInput.value.length < 6) {
    alert("Username must be 6 characters or more");
    document.pregistForm.usernameInput.focus();
    return false;
  }
  if (document.pregistForm.passwordInput.value.length < 8) {
    alert("Please provide a longer password");
    document.pregistForm.passwordInput.focus();
    return false;
  }
  if (document.pregistForm.dobInput.value.length != 10) {
    alert("Date of birth is not in the correct format!");
    document.pregistForm.dobInput.focus();
    return false;
  }
  if (document.pregistForm.countryInput.value == "") {
    alert("Please provide your country information");
    document.pregistForm.countryInput.focus();
    return false;
  }
  alert("Pre-registration success! wait for the open beta!");
  return (true);
}