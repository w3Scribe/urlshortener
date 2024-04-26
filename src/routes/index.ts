import { Router } from "express";
import { IExpressRequest } from "../types";


const hello: IExpressRequest = (req, res) => {
  res.render("hello world")
}

const HomeRoute = Router();

HomeRoute.route('/').get(hello)

export default HomeRoute