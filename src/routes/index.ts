import { Router } from "express";
import { createUserPost, deleteUserPost, getUserData } from "../controllers";

const HomeRoute = Router();

HomeRoute
  .get("/", getUserData)
  .post('/', createUserPost)
  .delete('/', deleteUserPost)

export default HomeRoute