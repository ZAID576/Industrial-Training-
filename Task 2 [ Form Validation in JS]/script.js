const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameIcon = document.getElementById("nameIcon");
const emailIcon = document.getElementById("emailIcon");
const emailError = document.getElementById("emailError");

// Name validation
nameInput.addEventListener("input", () => {
  if (nameInput.value.length > 2) {
    nameIcon.textContent = "✔";
    nameIcon.className = "icon valid";
  } else {
    nameIcon.textContent = "✖";
    nameIcon.className = "icon invalid";
  }
});

// Email validation
emailInput.addEventListener("input", () => {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (emailInput.value.match(emailPattern)) {
    emailIcon.textContent = "✔";
    emailIcon.className = "icon valid";
    emailError.textContent = "";
  } else {
    emailIcon.textContent = "✖";
    emailIcon.className = "icon invalid";
    emailError.textContent = "Enter Valid Email";
  }
});

// Password validation
passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length >= 8) {
    passwordInput.style.border = "2px solid green";
  } else {
    passwordInput.style.border = "2px solid red";
  }
});