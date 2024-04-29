import express from 'express';
import { join } from 'path';
import globalError from './middleware/globalError';
import HomeRoute from './routes';
import livereload from 'livereload';
import connectLiveReload from 'connect-livereload';

const reloadLiveServer = livereload.createServer({
  exts: ['css', 'ejs', 'ts'], // Add extensions of files you want to watch
});

reloadLiveServer.watch([join(__dirname, 'views'), join(__dirname, '../public')])

reloadLiveServer.server.once('connection', () => {
  setTimeout(() => {
    reloadLiveServer.refresh('/')
  }, 10)
})

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use(connectLiveReload({ port: 35729 }))

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views/pages'));



app.use("/", HomeRoute);
app.use(globalError)

export default app