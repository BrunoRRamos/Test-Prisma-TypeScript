import express from "express";
import UserController from "../controllers/UserController"

const router = express.Router();
const userController = new UserController;

router
    .get("/user", userController.getUserById)
    .post("/user", userController.createUser)