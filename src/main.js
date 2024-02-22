// Style & Asset Imports
import "./styles/reset.css";
import "./styles/main.css";

// Module Imports
import forms from "./js/forms";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.setAttribute("novalidate", true);

  form.addEventListener("focusout", (event) => {
    forms.validate(event.target);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Submit!");
  });
});
