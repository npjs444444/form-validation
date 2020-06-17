const error = [];
const render_error = document.getElementById("error_msg");
const render_success = document.getElementById("success_msg");

const name = document.getElementById("username");
const email = document.getElementById("useremail");
const password_one = document.getElementById("userpassword");
const password_two = document.getElementById("userpassword2");

const form_submit = document.getElementById("user_form");

// form-validation
form_submit.addEventListener("submit", (e) => {
  e.preventDefault();
  error.splice(0, error.length);
  if (name.value === "" || email.value === "" || password_one.value === "") {
    if (name.value === "") {
      error.push("* name is required");
    }
    if (email.value === "") {
      error.push("* email is required");
    }
    if (password_one.value === "") {
      error.push("* password is required");
    }
    error_handler(error);
    return false;
  } else if (password_one.value != password_two.value) {
    error.push("* password does not match");
    error_handler(error);
    return false;
  }

  name.value = "";
  email.value = "";
  password_one.value = "";
  password_two.value = "";

  success_handler("Form Submitted Successfully");
});

//handle-errors
function error_handler(err) {
  if (err) {
    render_success.style.display = "none";
    render_error.style.display = "block";
    render_error.innerHTML = "";
    err.forEach((error) => {
      render_error.innerHTML += `<p>${error}</p>`;
    });
  }
}

//handle-success
function success_handler(success) {
  if (success) {
    render_error.style.display = "none";
    render_success.style.display = "block";
    render_success.innerHTML = success;

    setTimeout(() => {
      render_success.style.display = "none";
    }, 4000);
  }
}
