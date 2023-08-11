const { inMSF } = require("../utilities/validators/dateFormat");

function isValidDate(dateString) {
  const date = new Date(dateString);
  return !isNaN(date) && date.toString() !== 'Invalid Date';
}

const getUTCTimestamp = (date) => {
  let response = {};

  if (!date) {
    const date = new Date();

    const unix = date.getTime();
    const utc = date.toUTCString();

    response = { unix, utc };
  } else {
    if (inMSF(date)) {
      const dateFormat = new Date(parseInt(date));
      const unix = parseInt(date);
      const utc = dateFormat.toUTCString();

      response = { unix, utc };
    } else if (isValidDate(date)) {
      const dateFormat = new Date(date);
      const unix = dateFormat.getTime();
      const utc = dateFormat.toUTCString();

      response = { unix, utc };
    } else {
      response = { error: "Invalid Date" };
    }
  }

  return response;
};

module.exports = { getUTCTimestamp };
