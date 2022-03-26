const express = require('express');
const router = express.Router();
const controller = require('./controller');
const { auth } = require('../auth');

// GET: fetch users
router.get('/', auth, controller.fetch);
// GET: fetch an user by id
router.get('/:id', controller.read);
// POST: create an user
router.post('/', controller.create);
// POST: login / signup
router.post('/signup', controller.signup);
// POST: login / signin
router.post('/signin', controller.signin);

module.exports = router;