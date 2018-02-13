"use strict"
let express = require('express');
let router = express.Router();

let controller = require('../controllers/index');

// need a require statement

/* GET login page. */
router.get('/', (req, res, next) => {
  controller.displayLogin(req, res);
});

router.post('/', (req, res, next) => {
  console.log("Pies");
  console.log(req.body.username);
  controller.procLogin(req, res);
});

/* GET form page. */
router.get('/form', (req, res, next) => {
  controller.processLogin(req, res);
});

router.post('/form', (req, res, next) => {
  res.redirect('/thanks');

})

/* GET thanks page. */
router.get('/thanks', (req, res, next) => {
  controller.thanks(req, res);
});

module.exports = router;
