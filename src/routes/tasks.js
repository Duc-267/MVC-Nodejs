import TaskController from "../app/controller/TaskController.js";

function taskRouter(request, response) {
  if (request.url.match(/\/tasks\/\d+/)) {
    const id = request.url.split("/")[2];
    if (request.method === "GET") {
      TaskController.getTaskById(id, request, response);
    } else if (request.method === "PUT") {
      TaskController.putTaskById(id, request, response);
    } else if (request.method === "PATCH") {
      TaskController.patchTaskById(id, request, response);
    } else if (request.method === "DELETE") {
      TaskController.deleteTaskById(id, request, response);
    }
  }
  if (request.method === "GET") {
    TaskController.getTasks(request, response);
  } else if (request.method === "POST") {
    TaskController.postTask(request, response);
  }
}

export default taskRouter;
