const validation = (() => {
  const validateField = (field) => {
    const validity = field.validity;

    // valueMissing
    if (validity.valueMissing) {
      field.setCustomValidity("Required");
      return false;
    }

    // rangeUnderflow and rangeOverflow
    if (validity.rangeUnderflow || validity.rangeOverflow) {
      if (field.name === "day") field.setCustomValidity("Must be a valid day");

      if (field.name === "month")
        field.setCustomValidity("Must be a valid month");

      return false;
    }

    // badInput
    if (validity.badInput) {
      field.setCustomValidity("Must be a number");
      return false;
    }

    // patternMismatch
    if (validity.patternMismatch) {
      field.setCustomValidity("Must be a valid year after 1900");
      return false;
    }

    // future date
    // todo: Get current year programatically.
    if (field.name === "year" && field.value > 2024) {
      field.setCustomValidity("Cannot be future year");
      return false;
    }

    // todo: test for month date mismatch

    // no error
    field.setCustomValidity("");
    return true;
  };

  const validateForm = (form) => {
    // todo: add validity check to see if month and day match
    // check form validity
    if (form.checkValidity()) {
      return true;
    } else {
      return false;
    }
  };

  return { validateField, validateForm };
})();

export default validation;
