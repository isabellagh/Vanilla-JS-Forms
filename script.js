const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}

// show success outline
function showSuccess(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

// Event listeners

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (name.value === '') {
      showError(name, "Your name is required")
  } else {
      showSuccess (name)
  }
});
