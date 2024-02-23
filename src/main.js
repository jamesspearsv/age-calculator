// Style & Asset Imports
import "./styles/reset.css";
import "./styles/main.css";

// Module Imports
import validation from "./js/validate";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.setAttribute("novalidate", true);

  form.addEventListener("focusout", (event) => {
    console.log(event.target);
    const error = validation.validateField(event.target);

    if (error) {
      event.target.classList.add("invalid");
    } else {
      event.target.classList.remove("invalid");
    }

    console.log(error);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Submit!");
  });
});
