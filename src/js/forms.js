const forms = (() => {
  const validate = (field) => {
    console.log(field);
    //   Return if field is not input
    if (field.tagName !== "INPUT") return;

    // Standard validation
    if (field.validity.valueMissing) {
      field.classList.add("invalid");
    }

    //   Custom valiation
    if (field.name === "day") {
      if (field.value < 1 || field.value > 31) {
        field.setCustomValidity("Invalid day");
        field.classList.add("invalid");
      }
    } else {
      if (field.classList.contains("invalid")) {
        field.classList.remove("invalid");
      }
    }

    return;
  };

  return { validate };
})();

export default forms;
