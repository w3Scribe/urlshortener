import app from "./src";
import chalk from "chalk";
import { __env } from './src/config/index';

async function dbConnetion() {
  await __env.__PRISMA_CLIENT.$connect()
  console.log(chalk.blue('Connected to the database successfully!'));
}

async function server() {
  await dbConnetion().catch(error => {
    console.error(chalk.red('Failed to connect to the database:'), error);
    return __env.__PRISMA_CLIENT.$disconnect();
  });

  app.listen(__env.__PORT, () => {
    console.log(chalk.green(`Server is running on http://localhost:${__env.__PORT}`));
  });
}

server();
