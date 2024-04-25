import express from 'express'
import UserRouter from "./routes/users";
import globalError from './middleware/globalError';
import { join } from 'path';

const app = express()

// middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views/pages'));

// routes
app.use('/home', UserRouter)
   
// global Error
app.use(globalError)

export default app