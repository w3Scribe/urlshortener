import express from 'express'
// import UserRouter from "./routes/users";
import globalError from './middleware/globalError';

const app = express()

// middleware
app.use(express.urlencoded({extended : true}));
app.use(express.json());

// routes
// app.use('/users', UserRouter)

// global Error
app.use(globalError)

export default app