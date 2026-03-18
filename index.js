const express = require("express");
const app = express();

const USERS_DATA = [
  {
    userName: "Ashish",
    age: 42,
    email: "Xm1j9@example.com",
  },
  {
    userName: "Rahul",
    age: 42,
    email: "Xm1j9@example.com",
  },
  {
    userName: "Vishal",
    age: 42,
    email: "Xm1j9@example.com",
  },
  {
    userName: "Aman",
    age: 42,
    email: "Xm1j9@example.com",
  },
  {
    userName: "Aman",
    age: 42,
    email: "Xm1j9@example.com",
  },
];

app.get("/", (req, res) => {
  res.json(USERS_DATA);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
