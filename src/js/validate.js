const validation = (() => {
  const validateField = (field) => {
    const validity = field.validity;
    const name = field.name;

    // valueMissing
    if (validity.valueMissing) {
      return "Required";
    }

    // rangeUnderflow and rangeOverflow
    if (validity.rangeUnderflow || validity.rangeOverflow) {
      return "Input out of range";
    }

    // badInput
    if (validity.badInput) {
      return "Bad Input";
    }

    // patternMismatch
    if (validity.patternMismatch) {
      return "Pattern mismatch";
    }

    // future date
    // TODO: Get current year programatically.
    if (field.name === "year" && field.value > 2024) {
      return "Future year";
    }

    // no error
    return null;
  };

  return { validateField };
})();

export default validation;
