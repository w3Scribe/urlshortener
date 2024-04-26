import express from 'express';
import { join } from 'path';
import globalError from './middleware/globalError';
import HomeRoute from './routes';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.set('views engine', 'ejs');
app.set('views', join(__dirname, 'views/pages'))

app.use("/", HomeRoute);
app.use(globalError)

export default app