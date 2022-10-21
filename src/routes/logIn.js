import UserController from "../app/controller/UserController.js";
import express from "express";

var router = express.Router();

router.post("/", (req, res) => {
  UserController.logIn(req, res);
});


export default router;
