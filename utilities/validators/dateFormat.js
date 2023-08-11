// check whether the date is in millisecond format
const inMSF = (date) => {
  const re = /^\d{1,13}$/;

  return re.test(date);
};

// check whether the date in YYYY-MM or YYYY-MM-DD according to ECMA - https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format
const inDF = (dateString) => {
  //  regex for YYYY-MM-DD
  const pattern1 = /^\d{4}(\-)(0[1-9]|1[0-2])(\-)(0[1-9]|[12][0-9]|3[01])$/;

  // regex for YYYY-MM
  const pattern2 = /^\d{4}(-)(0[1-9]|1[0-2])$/;

  // regex for dd/mm/yyyy
  const pattern3 =
    /^(0[1-9]|[12][0-9]|3[01])(\/)(0[1-9]|1[0-2])(\/)\d{4}$/;

  // regex for Month DD, YYYY
  const pattern4 =
    /^(January|February|March|April|May|June|July|August|September|October|November|December) [0-3]?[0-9], \d{4}$/;

  const pattern5 = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;

  return (
    pattern1.test(dateString) ||
    pattern2.test(dateString) ||
    pattern3.test(dateString) ||
    pattern4.test(dateString) ||
    pattern5.test(dateString)
  );
};

module.exports = {
  inMSF,
  inDF,
};
