import { insertUser, verifyUser } from "./helpers.js";
import Image from "../models/Image.js";
import jwt from "jsonwebtoken";
import fs from "fs";

const UserController = {
  //[POST] user/sign-up
  signUp: (request, response) => {
    const user = request.body;
    insertUser(user)
      .then(() => {
        console.log("New user is stored");
        response.end();
      })
      .catch((err) => console.log("error:", err));
  },

  //[POST] user/log-in
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

  //[GET] user/upload
  uploadAvatarScreen: (request, response) => {
    response.sendFile("upload.html", { root: "./src/views" });
  },
  
  //[POST] user/avatar/upload
  uploadAvatar: (request, response) => {
    var img = fs.readFileSync(request.file.path);
    var encode_image = img.toString('base64');
    var finalImg = {
      img:  Buffer.from(img, 'base64')
    };
    const newImage = new Image(finalImg);
    newImage.save()
    .then(() => {
      console.log("New image is stored");
      response.end();
    })
    .catch((err) => console.log("error:", err));
    response.end();
  },

  //[GET] user/avatar
  getAvatar: (request, response) => {
    Image.findById('6354cad483bdfa24f0f741d3')
    .then((image) => {
      response.send( `<img src="data:image/jpg;base64, ${image.img.toString('base64')}" />`);
    })
    .catch((err) => console.log("error:", err));
  }
}

export default UserController;
