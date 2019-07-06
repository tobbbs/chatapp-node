const express = require('express');
const router = express.Router();
const Message = require('../models/Message');


router.get('/get_all', function(req, res, next) {
	Message.findAll()
	.then((messages) => {
		res.send(messages);
	})
	.catch((err) => {
	  console.log(err);
	  res.send(500, err);
	});
});

router.post('/new_message', function(req, res, next){
	Message.create(req.body)
	.then((message) => {
		res.send(message) 
	})
	.catch((err) => {
		res.send(500, err);
	});
})

module.exports = router;
