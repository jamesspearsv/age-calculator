// Style & Asset Imports
import "./styles/reset.css";
import "./styles/main.css";
import "./styles/desktop.css";

// Module Imports
import validation from "./js/validate";
import view from "./js/view";
import calc from "./js/calc";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.setAttribute("novalidate", true);

  // Validate and handle validation when user leave a field
  form.addEventListener("focusout", (event) => {
    const field = event.target;
    const isValid = validation.validateField(field);
    view.styleValidation(field, isValid);
  });

  // Valiate and handle validation when user submits the form
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;

    const isValid = validation.validateForm(form);

    if (isValid) {
      // todo: process the form data
      const elements = form.elements;
      const year = parseInt(elements.year.value);
      const month = parseInt(elements.month.value);
      const day = parseInt(elements.day.value);

      const result = calc.calcAge(year, month, day);
      view.displayResult(result);
      form.reset();
    } else {
      // Validate field and handle invalid fields
      for (let i in form.elements) {
        const field = form[i];

        if (field.tagName !== "INPUT") return;

        const isValid = validation.validateField(field);

        view.styleValidation(field, isValid);
      }
    }
  });
});
