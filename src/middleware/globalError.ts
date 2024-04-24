import { IGlobalError } from "../types";
import { config } from "dotenv";

config()

const globalError: IGlobalError = (err, req, res, _next) => {
  const statusCode: number = err.statusCode || 500
  res.status(statusCode).send({
    ErrorMessage: err.message,
    ErrorStack: process.env._ENVIRONMENT_NAME === "Development" ? err.stack : "😜"
  })
}


export default globalError