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

  return { styleValidation };
})();

export default view;
