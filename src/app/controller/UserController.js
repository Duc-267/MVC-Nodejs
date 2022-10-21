import { insertUser, verifyUser } from "./helpers.js";
import jwt from "jsonwebtoken";

const UserController = {
  //[POST] /sign-up
  signUp: (request, response) => {
    const user = request.body;
    insertUser(user)
      .then(() => {
        console.log("New user is stored");
        response.end();
      })
      .catch((err) => console.log("error:", err));
  },

  //[POST] /log-in
  logIn: (request, response) => {
    const user = request.body;
    verifyUser(user)
      .then((foundUser) => {
        if (!foundUser) {
          throw new Error("User not found");
        }
        const token = jwt.sign(
          { userId: foundUser.id },
          "RANDOM_TOKEN_SECRET",
          { expiresIn: "24h" }
        );
        response.end(JSON.stringify(token));
      })
      .catch((err) => {
        console.log(err, "controllers/index.js", "signIn");
        response.statusCode = 404;
        response.end("Username or password is not correct.");
      });
  },
};

export default UserController;
