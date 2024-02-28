const view = (() => {
  const styleValidation = (field, isValid) => {
    if (field.tagName !== "INPUT") return;

    // Set field class if invalid or valid
    if (!isValid) {
      field.classList.add("invalid");
    } else {
      field.classList.remove("invalid");
    }

    // Set ui error message
    const error = field.nextElementSibling;
    error.textContent = field.validationMessage;
  };

  const displayResult = (result) => {
    const spans = document.querySelectorAll(".age > span");
    spans[0].textContent = result.years;
    spans[1].textContent = result.months;
    spans[2].textContent = result.days;
  };

  return { styleValidation, displayResult };
})();

export default view;
