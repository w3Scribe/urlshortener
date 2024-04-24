import { Router } from "express";
import { createShortUrl, deleteShortUrl, getShortUrl } from "../controllers";

const UserRouter = Router()

UserRouter
  .get("/:id", getShortUrl)
  .post("/", createShortUrl)
  .delete("/", deleteShortUrl)

export default UserRouter