import Task from "../models/Task.js";

const TaskController = {
  //[GET] /tasks
  getTasks: (request, response) => {
    Task.find({})
      .then((tasks) => response.end(JSON.stringify(tasks)))
      .catch((err) => console.log(err));
  },

  //[POST] /tasks
  postTask: (request, response) => {
    const task = request.body;
    const newTask = new Task(task);
    newTask
      .save()
      .then(() => {
        console.log("New task is stored");
        response.end();
      })
      .catch((err) => console.log('error:', err));
  },

  //[GET] /tasks/:id
  getTaskById: (request, response) => {
    const id = request.params.id;
    Task.findById(id)
      .lean()
      .then((task) => response.end(JSON.stringify(task)))
      .catch((err) => console.log(err));
  },

  //[PUT] /tasks/:id
  putTaskById: (request, response) => {
    const id = request.params.id;
    let task = request.body;
    Task.findByIdAndUpdate(id, { name: task })
      .then(() => {
        console.log(`Task ${id} is updated`);
        response.end();
      })
      .catch((err) => console.log(err));
  },

  //  //[PATCH] /tasks/:id
  patchTaskById: (request, response) => {
    const id = request.params.id;
    Task.findByIdAndUpdate(id, { isDone: true })
      .then(() => {
        console.log(`Task ${id} is set to be done`);
        response.end();
      })
      .catch((err) => console.log(err));
  },

  //  //[DELETE] /tasks/:id
  deleteTaskById: (request, response) => {
    const id = request.params.id;
    Task.findByIdAndDelete(id)
      .then(() => {
        console.log(`Task ${id} is deleted`);
        response.end();
      })
      .catch((err) => console.log(err));
  },
};

export default TaskController;
