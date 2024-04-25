import { Router } from "express";
import { Home } from "../controllers";

const UserRouter = Router()

UserRouter.route('/')
  .get(Home)
//   .post("/", createShortUrl)
//   .delete("/", deleteShortUrl)

export default UserRouter