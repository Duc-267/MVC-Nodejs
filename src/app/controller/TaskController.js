import Task from "../models/Task.js";
import { parseRequestBody } from "../../middlewares/parse-body.js";

const TaskController = {
  //[GET] /tasks
  getTasks: (request, response) => {
    Task.find({})
      .then((tasks) => response.end(JSON.stringify(tasks)))
      .catch((err) => console.log(err));
  },

  //[POST] /tasks
  postTask: (request, response) => {
    parseRequestBody(request).then((task) => {
      task = JSON.parse(task);
      task.isDone = false;
      const newTask = new Task(task);
      newTask
        .save()
        .then(() => {
          console.log("New task is stored");
          response.end();
        })
        .catch((err) => console.log(err));
    });
  },

  //  //[GET] /tasks/:id
  getTaskById: (id, request, response) => {
    Task.findById(id)
      .lean()
      .then((task) => response.end(JSON.stringify(task)))
      .catch((err) => console.log(err));
  },

  //[PUT] /tasks/:id
  putTaskById: (id, request, response) => {
    parseRequestBody(request).then((task) => {
      task = task.toString()
      Task.findByIdAndUpdate(id, { name: task })
        .then(() => {
          console.log(`Task ${id} is updated`);
          response.end();
        })
        .catch((err) => console.log(err));
    });
  },

  //  //[PATCH] /tasks/:id
  patchTaskById: (id, request, response) => {
    Task.findByIdAndUpdate(id, { isDone: true })
      .then(() => {
        console.log(`Task ${id} is set to be done`);
        response.end();
      })
      .catch((err) => console.log(err));
  },

  //  //[DELETE] /tasks/:id
  deleteTaskById: (id, request, response) => {
    Task.findByIdAndDelete(id)
      .then(() => {
        console.log(`Task ${id} is deleted`);
        response.end();
      })
      .catch((err) => console.log(err));
  },
};

export default TaskController;
