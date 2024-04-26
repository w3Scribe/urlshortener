import { IGlobalError } from "../types";
import { config } from "dotenv";

config()

const globalError: IGlobalError = (err, _req, res, _next) => {
  const statusCode: number = err.statusCode || 500
  res.status(statusCode).send({ 
    ErrorMessage: "Internal Server Error",
    ErrorStack: process.env._ENVIRONMENT_NAME === "production" ? "😜" : err.stack
  })
}


export default globalError