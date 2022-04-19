const express = require('express');
const router = express.Router();
const controller = require('./controller');
const { auth, me } = require('../auth');

const taskRouter = require('../tasks/routes');

// GET: fetch users
router.get('/', controller.fetch);
// POST: search a user by name
router.post('/search', auth, controller.create);
// GET: fetch an user by id
router.get('/:id', auth, me, controller.read);
// POST: create an user
router.post('/', auth, controller.create);
// POST: login / signup
router.post('/signup', controller.signup);
// POST: login / signin
router.post('/signin', controller.signin);
// PATCH: update an user
router.patch('/:id', auth, me, controller.update);
// DELETE: delete an user
router.delete('/:id', auth, me, controller.delete);

// Nested resources
router.use('/:userId/tasks/', taskRouter);

module.exports = router;