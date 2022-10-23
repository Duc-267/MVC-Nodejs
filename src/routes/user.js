import express from "express";
import UserController from "../app/controller/UserController.js";
import { upload } from "../middlewares/index.js";

var router = express.Router();

router.post("/login", (req, res) => {
  UserController.logIn(req, res);
});

router.post("/signup", (req, res) => {
  UserController.signUp(req, res);
});

router.get("/upload", (req, res) => {
  UserController.uploadAvatarScreen(req, res);
});

router.get("/avatar", (req, res) => {
  UserController.getAvatar(req, res);
});

router.post("/upload/avatar", upload.single(('myImage')), (req, res) => {
  UserController.uploadAvatar(req, res);
});


export default router;
