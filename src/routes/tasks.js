
import TaskController from "../app/controller/TaskController.js";
import express from "express";

var router = express.Router();

router.get("/:id", (req, res) => {
    TaskController.getTaskById(req, res);
});
router.put("/:id", (req, res) => {
    TaskController.putTaskById(req, res);
});
router.patch("/:id", (req, res) => {
    TaskController.patchTaskById(req, res);
});
router.delete("/:id", (req, res) => {
    TaskController.deleteTaskById(req, res);
});
router.get("/", (req, res) => {
    TaskController.getTasks(req, res);
});
router.post("/", (req, res) => {
    TaskController.postTask(req, res);
});

export default router;
