import bcrypt from "bcryptjs";

const users = [
  {
    name: "Mohammed",
    email: "mohammed@test.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "notAdmin",
    email: "test@test.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
