// Event listener for when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Add event listeners to input fields for blur events
  document.getElementById('username').addEventListener('blur', validateSignup);
  document.getElementById('lastname').addEventListener('blur', validateSignup);
  document.getElementById('email').addEventListener('blur', validateSignup);
  document.getElementById('pass').addEventListener('blur', validateSignup);
  document.getElementById('pass2').addEventListener('blur', validateSignup);
  document.getElementById('terms').addEventListener('change', validateSignup);

  // Add event listener to the signup form
  document.getElementById('signup-form').addEventListener('submit', function (event) {
    // Prevent the form from submitting if validation fails
    if (!validateSignup()) {
      event.preventDefault();
    }
  });

  // Event listener for the reset button to clear errors and reset the form
  document.getElementById('reset-button').addEventListener('click', function () {
    clearErrors(); // Clear error messages
    clearForm();   // Reset form inputs
  });
});

// Function to validate the signup form
function validateSignup() {
  // Reset error messages
  clearErrors();

  // Get form inputs
  var username = document.getElementById('username').value;
  var lastname = document.getElementById('lastname').value;
  var email = document.getElementById('email').value;
  var pass = document.getElementById('pass').value;
  var pass2 = document.getElementById('pass2').value;
  var terms = document.getElementById('terms').checked;

  // Validate username
  if (!isValidUsername(username)) {
    displayError('username', 'X User name should be non-empty, and within 30 characters long.');
  }

  // Validate lastname
  if (!isValidLastname(lastname)) {
    displayError('lastname', 'X Last name should be non-empty, and within 30 characters long.');
  }

  // Convert username to lowercase
  username = username.toLowerCase();
  lastname = lastname.toLowerCase();

  // Validate email
  if (!isValidEmail(email)) {
    displayError('email', 'X Email address should be non-empty with the format xyx@xyz.xyz.');
  }

  // Validate password
  if (!isValidPassword(pass)) {
    displayError('pass', 'X Password should be at least 8 characters with at least 1 uppercase and 1 lowercase letter.');
  }

  // Validate re-typed password
  if (pass !== pass2 || pass2 === '') {
    displayError('pass2', 'X Please retype password.');
  }

  // Validate terms acceptance
  if (!terms) {
    displayError('terms', 'X Please accept the terms and conditions.');
  }

  // Check if any error messages were displayed
  var errors = document.getElementsByClassName('error-message');
  return errors.length === 0;
}

// Function to check if a username is valid
function isValidUsername(username) {
  // Check if username is non-empty and less than 30 characters
  return username.trim() !== '' && username.length < 30;
}

// Function to check if a lastname is valid
function isValidLastname(lastname) {
  // Check if username is non-empty and less than 30 characters
  return lastname.trim() !== '' && lastname.length < 30;
}

// Function to check if an email is valid using a regular expression
function isValidEmail(email) {
  var emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}

// Function to check if a password is valid
function isValidPassword(password) {
  // Check if password is at least 8 characters with at least 1 uppercase and 1 lowercase letter
  return password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password);
}

// Function to display an error message for a specific field
function displayError(field, message) {
  // Display error message for the specified field
  var errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.textContent = message;

  var fieldElement = document.getElementById(field);
  fieldElement.parentNode.appendChild(errorDiv);

  // Highlight the field in error
  fieldElement.classList.add('error-highlight');
}

// Function to clear all error messages and highlights
function clearErrors() {
  // Clear all error messages and highlights
  var errors = document.getElementsByClassName('error-message');
  while (errors.length > 0) {
      errors[0].parentNode.removeChild(errors[0]);
  }

  var highlightedFields = document.getElementsByClassName('error-highlight');
  while (highlightedFields.length > 0) {
      highlightedFields[0].classList.remove('error-highlight');
  }
}

// Function to clear the form inputs and errors
function clearForm() {
  // Clear form inputs
  document.getElementById('email').value = '';
  document.getElementById('username').value = '';
  document.getElementById('lastname').value = '';
  document.getElementById('pass').value = '';
  document.getElementById('pass2').value = '';
  document.getElementById('terms').checked = false;

  // Clear errors after resetting the form
  clearErrors();
}

// Function to validate the login form
function validateLogin() {
  // Reset error messages
  clearErrors();

  // Get form inputs
  var username = document.getElementById('user').value;
  var password = document.getElementById('pass').value;

  // Validate username
  if (!isValidUsername(username)) {
      displayError('user', 'Username should be non-empty.');
      return false;
  }

  // Validate password
  if (!isValidPassword(password)) {
      displayError('pass', 'Password should be non-empty.');
      return false;
  }

  // Successful validation
  return true;
}

// Function to check if the username is valid
function isValidUsername(username) {
  return username.trim() !== '';
}

// Function to check if the password is valid
function isValidPassword(password) {
  return password.trim() !== '';
}

// Function to display an error message for a specific field
function displayError(field, message) {
  // Display error message for the specified field
  var errorDiv = document.createElement('div');
  errorDiv.className = 'error-message'; // Add the error-message class
  errorDiv.textContent = message;

  var fieldElement = document.getElementById(field);
  fieldElement.parentNode.appendChild(errorDiv);

  // Highlight the field in error
  fieldElement.classList.add('error-highlight');
}

// Function to clear all error messages
function clearErrors() {
  // Clear all error messages and highlights
  var errors = document.querySelectorAll('.error-message');
  errors.forEach(function (error) {
    error.parentNode.removeChild(error);
  });

  var highlightedFields = document.querySelectorAll('.error-highlight');
  highlightedFields.forEach(function (field) {
    field.classList.remove('error-highlight');
  });
}

































