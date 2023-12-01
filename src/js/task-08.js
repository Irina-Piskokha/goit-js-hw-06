const form = document.querySelector(".login-form");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const email = evt.currentTarget.elements.email.value;
  const password = evt.currentTarget.elements.password.value;

  if (email === "" || password === "") {
    alert("All fields must be filled");
  }

  const data = {
    email,
    password,
  };
  console.log(data);
  evt.currentTarget.reset();
});
