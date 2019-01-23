import db from './database';
import { Product } from './models/schema';
import { RequestHandlerService } from './services/RequestHandlerService';

const express = require('express');
const router = express.Router();

router.get('/*', (req, res, next) => {

  // Adding the cookie on the web-browser
  if (req.session.page_views) {
    req.session.page_views++;
    console.log('You visited this page ' + req.session.page_views + ' times');
  } else {
    req.session.page_views = 1;
  }

  next();
});

/**
 * default routes re-direct to products
 */

router.get('/', (req, res) => {
  res.send('Hello World');
});


module.exports = router;
