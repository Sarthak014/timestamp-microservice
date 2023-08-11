// check whether the date is in millisecond format
const inMSF = (date) => {
  const re = /^\d{1,13}$/;

  return re.test(date);
};

// check whether the date in YYYY-MM or YYYY-MM-DD according to ECMA - https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format
const inDF = (date) => {
  //  regex for YYYY-MM-DD
  const re1 = /^\d{4}(-)\d{2}(-)\d{2}$/;

  // regex for YYYY-MM
  const re2 = /^\d{4}(-)\d{2}$/;

  return re1.test(date) || re2.test(date);
};

module.exports = {
  inMSF,
  inDF
};
