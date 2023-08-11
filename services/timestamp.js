const { inMSF, inDF } = require("../utilities/validators/dateFormat");

const getUTCTimestamp = (date) => {
  let response = {};

  if (!date) {
    response = { error: "Invalid Date" };
  } else {
    if (inMSF(date)) {
      const dateFormat = new Date(parseInt(date));
      const unix = parseInt(date);
      const utc = dateFormat.toUTCString();

      response = { unix, utc };
    } else if (inDF(date)) {
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