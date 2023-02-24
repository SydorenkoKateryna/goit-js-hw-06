const form = document.querySelector(".login-form");

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert("All fields must be completed!");
  } else {
    const data = {
      email: email.value,
      password: password.value,
    };

    console.log(data);

    form.reset();
  }
}

form.addEventListener("submit", onFormSubmit);
