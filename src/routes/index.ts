import { Router } from "express";
import { createUserPost, deleteUserPost, getUserData } from "../controllers/index";

const HomeRoute = Router();

HomeRoute.route("/")
  .get(getUserData)
  .post(createUserPost)
  .delete(deleteUserPost)

export default HomeRoute