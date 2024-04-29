import { IGlobalError } from "../types/index";
import { __env } from "../config";
import chalk from 'chalk'

const globalError: IGlobalError = (err, _req, res, _next) => {
  const statusCode: number = err.statusCode || 500
  const { message } = err
  const ErrorStack = __env.__ENVIRONMENT === "production" ? "😜" : err.stack

  console.log(chalk.red(`Error : ${message} \nErrorStack: ${ErrorStack}`))
  res.status(statusCode).render('error', { errorMessage: message });
}


export default globalError