# Timestamp Microservice

This Git repository contains a simple and efficient Timestamp Microservice that provides UTC timestamps and time in milliseconds based on user inputs. With this microservice, you can quickly obtain accurate timestamps for a given date or a specified number of milliseconds.

---

# Features

- Get UTC timestamp and time in milliseconds for a given date.
- Get UTC timestamp for a specified number of milliseconds.

# Usage

- Create a .env file in the root directory of the project and specify the desired port number:
  PORT=3000

  Replace 3000 with your preferred port number.

- Access the microservice through your web browser or API client:

  - To get UTC timestamp and time in milliseconds for a given date, use the following endpoint:
    GET http://localhost:3000/api/:date

  - To get UTC timestamp for a specified number of milliseconds, use the following endpoint:
    GET http://localhost:3000/api/:milliseconds

---

# Contributing

Contributions to this Timestamp Microservice are welcome! If you find any issues or want to add enhancements, feel free to create pull requests or submit issues in this repository.
