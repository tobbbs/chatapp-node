const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/login', function (req, res, next) {
  console.log(req.body)
  //expect username password
  User.findOne(req.body)
  .then((user) => {
    console.log('response',  user);
    if (user) {
      if (req.body.input_password === user.password) {
        res.send(200, user);
      } else {
        res.send(400, {err: 'Incorrect password'});
      }
    } else {
      res.send(400, {err: 'No user with username'});
    }
  })
  .catch((err) => {
    console.log(err);
    res.send(500, err);
  });
});

router.post('/register', function (req, res, next) {
  console.log(req.body)
  //expect username password
  User.findOne(req.body)
  .then((user) => {
    console.log('response',  user);
    if (user) {
      if (req.body.input_password === user.password) {
        res.send(200, user);
      } else {
        res.send(400, {err: 'Incorrect password'});
      }
    } else {
        return
    }
  }) 
  .then(() => {
    User.create(req.body)
    .then((user) =>{
      res.render('index');
    })
  })
  .catch((err) => {
    console.log(err);
    res.send(500, err);
  });
});

router.get('/register', function(req, res, next) {
  res.render('register', {title: 'Chat App'});
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Chat App' });
});

// Wildcard route
router.get('/*', function(req, res, next) {
  res.render('index', { title: 'Chat App' });
});

module.exports = router;
