import { config } from "dotenv";
import { IGlobalError } from "../types/index";

config()

const globalError: IGlobalError = (err, _req, res, _next) => {
  const statusCode: number = err.statusCode || 500
  res.status(statusCode).send({
    ErrorMessage: "Internal Server Error",
    ErrorStack: process.env._ENVIRONMENT_NAME === "production" ? "😜" : err.stack
  })
}


export default globalError