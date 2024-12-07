import express from "express";
const router = express.Router();
import * as TaskController from "../app/controllers/TaskController.js";
import * as UsersController from "../app/controllers/UsersController.js";
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";



// Users
router.post("/Registration",UsersController.Registration)
router.post("/Login",UsersController.Login)
router.get("/ProfileDetails",AuthMiddleware,UsersController.ProfileDetails)
router.post("/ProfileUpdate",AuthMiddleware,UsersController.ProfileUpdate)

router.get("/EmailVerify/:email",UsersController.EmailVerify)
router.get("/CodeVerify/:email/:code",UsersController.CodeVerify)
router.post("/ResetPassword",UsersController.ResetPassword)


// Task
router.post("/CreateTask",AuthMiddleware,TaskController.CreateTask)
router.get("/UpdateTaskStatus/:id/:status",AuthMiddleware,TaskController.UpdateTaskStatus)
router.get("/TaskListByStatus/:status",AuthMiddleware,TaskController.TaskListByStatus)


router.get("/DeleteTask/:id",AuthMiddleware,TaskController.DeleteTask)
router.get("/CountTask",AuthMiddleware,TaskController.CountTask)












export default router;