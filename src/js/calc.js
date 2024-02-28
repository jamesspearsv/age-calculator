const calc = (() => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  const currentDay = date.getDate();

  const calcDays = (year, month, day) => {
    // Count number of days since 1/1/1900
    let days = 0;

    // years
    for (let testYear = 1901; testYear <= year; testYear++) {
      if (isLeapYear(testYear)) {
        days += 366;
      } else {
        days += 365;
      }
    }

    // months
    let YEAR = [];
    if (isLeapYear(year)) {
      YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    } else {
      YEAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }

    for (let i = 0; i < month - 1; i++) {
      days += YEAR[i];
    }

    // days
    days += day;

    return days;
  };

  const parseDays = (value) => {
    const YEAR = 365;
    const MONTH = 30;
    const DAY = 1;

    let years = 0,
      months = 0,
      days = 0;

    // Count number of years, months, and days
    while (value) {
      if (value >= YEAR) {
        years++;
        value -= YEAR;
      } else if (value >= MONTH) {
        months++;
        value -= MONTH;
      } else if (value >= DAY) {
        days++;
        value -= DAY;
      }
    }

    return {
      years,
      months,
      days,
    };
  };

  const isLeapYear = (year) => {
    // century leap years
    if (year % 100 === 0) {
      if (year % 4 === 0 && year % 400 === 0) {
        return true;
      }
    } else if (year % 4 === 0) {
      // regular leap years
      return true;
    } else {
      // non-leap years
      return false;
    }
  };

  const calcAge = (year, month, day) => {
    // Get number of days between inputed date and 1/1/1900
    const inputDate = calcDays(year, month, day);

    // Get number of days between current date and 1/1/1900
    const currentDate = calcDays(currentYear, currentMonth, currentDay);

    // Return result of calculations and parsing
    return parseDays(currentDate - inputDate);
  };

  return { calcAge };
})();

export default calc;
