import taskRouter from "./tasks.js";
import userRouter from "./user.js";

function route(app) {
  app.use("/tasks", taskRouter);
  app.use("/user", userRouter);
}

export default route;
