import taskRouter from "./tasks.js";
import signUpRouter from "./signUp.js";
import logInRouter from "./logIn.js";

function route(app) {
  app.use("/tasks", taskRouter);
  app.use("/sign-up", signUpRouter);
  app.use("/log-in", logInRouter);
}

export default route;
