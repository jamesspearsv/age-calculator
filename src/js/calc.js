const calc = (() => {
  const date = new Date();

  const calcAge = () => {
    console.log(date);
  };

  return { calcAge };
})();

export default calc;
