// Limit phone # field to 10 digits //
document.getElementById("phone_number").addEventListener("input", function () {
  if (this.value.length > 10) {
    this.value = this.value.slice(0, 10); // Truncate the input value to 10 characters
  }
});

// Function to check if the passwords match
function checkPasswords() {
  var password = document.getElementById("user_password").value;
  var confirmPassword = document.getElementById("confirm_password").value;
  var errorSpan = document.querySelector(".error_message");

  if (password !== confirmPassword || password === "") {
    // Set border color to red
    document.getElementById("user_password").classList.add("error");
    document.getElementById("confirm_password").classList.add("error");

    // Display error message
    errorSpan.textContent = "* passwords do not match";
  } else {
    // Remove error styles and message
    document.getElementById("user_password").classList.remove("error");
    document.getElementById("confirm_password").classList.remove("error");
    errorSpan.textContent = "";
  }
}

// Function to listen for input changes in the password fields
function addPasswordListeners() {
  var passwordFields = document.querySelectorAll("input[type='password']");

  passwordFields.forEach(function (field) {
    field.addEventListener("input", checkPasswords);
  });
}

// Call the addPasswordListeners function to start listening for input changes
addPasswordListeners();
