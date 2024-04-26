import { Router } from "express";
import { IExpressRequest } from "../types";


const hello: IExpressRequest = (req, res) => {
  res.render("home", {
    inputText: 'hello'
  })
}
const post: IExpressRequest = (req, res) => {
  res.render("home", {
    inputText: 'post'
  })
}
const deletef: IExpressRequest = (req, res) => {
  res.render("home", {
    inputText: 'delete'
  })
}

const HomeRoute = Router();

HomeRoute
  .get("/", hello)
  .post('/', post)
  .delete('/', deletef)

export default HomeRoute