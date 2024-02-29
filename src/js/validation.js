const validation = (() => {
  const date = new Date();
  const validateField = (field) => {
    const validity = field.validity;

    // valueMissing
    if (validity.valueMissing) {
      field.setCustomValidity("Required");
      return false;
    }

    // rangeUnderflow and rangeOverflow
    if (validity.rangeUnderflow || validity.rangeOverflow) {
      if (field.name === "day") {
        field.setCustomValidity("Must be a valid day");
      }

      if (field.name === "month") {
        field.setCustomValidity("Must be a valid month");
      }

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
    if (field.name === "year" && field.value > date.getFullYear()) {
      field.setCustomValidity("Cannot be future year");
      return false;
    }

    // no error
    field.setCustomValidity("");
    return true;
  };

  const validateForm = (form) => {
    // check form validity
    return form.checkValidity();
  };

  const validateDate = (input, month, year, isLeapYear) => {
    const monthsWith31Days = [1, 3, 5, 7, 8, 10, 12];
    const monthsWith30Days = [4, 6, 9, 11];

    if (monthsWith31Days.includes(month)) {
      input.max = "31";
    } else if (monthsWith30Days.includes(month)) {
      input.max = "30";
    } else if (month === 2) {
      isLeapYear(year) ? (input.max = "29") : (input.max = "28");
    } else {
      input.max = "31";
    }
  };

  return { validateField, validateForm, validateDate };
})();

export default validation;
