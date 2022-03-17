const express = require('express');
const router = express.Router();
const controller = require('./controller');

// GET: fetch users
router.get('/', controller.fetch);
// GET: fetch an user by id
router.get('/:id', controller.read);
// POST: create an user
router.post('/', controller.create);

module.exports = router;