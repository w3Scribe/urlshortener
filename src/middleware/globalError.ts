import { config } from "dotenv";
import { IGlobalError } from "../types/index";
import { __env } from "../config";

config()

const globalError: IGlobalError = (err, _req, res, _next) => {
  const statusCode: number = err.statusCode || 500
  res.status(statusCode).send({
    ErrorMessage: "Internal Server Error",
    ErrorStack: __env.__ENVIRONMENT === "production" ? "😜" : err.stack
  })
}


export default globalError