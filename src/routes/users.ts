import { Router } from "express";

const UserRouter = Router()

UserRouter
  .route('/')
  .get()
  .post()
  .delete()

export default UserRouter