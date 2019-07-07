const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const users_controller = require('../controllers/users.controller');


// a simple test url to check that all of our files are communicating correctly.
router.post('/create', users_controller.create);
router.get('/list', users_controller.list);
router.post('/update', users_controller.update);
router.post('/delete', users_controller.delete);

module.exports = router;