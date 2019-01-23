import db from './src/database';
import express from 'express';
import router from './src/router';
import cookieParser from 'cookie-parser';
import session from 'express-session';

const app = express();

let port = 8080;

app.use(cookieParser());
app.use(session({ secret: process.env['COOKIE_USER_PASS'] }));

app.listen(port, () => {
  console.log(' server is started and listen on port [' + port + ']');
  db.init();
});

//all the requests will be handled by routes middleware
app.use('/', router);
