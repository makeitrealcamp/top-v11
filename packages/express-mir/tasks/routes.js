const express = require('express');
const router = express.Router({
  mergeParams: true,
});
const controller = require('./controller');
const { auth, owner } = require('../auth');

// middleware that is specific to this router
router.use((req, res, next) => {
  // console.log('Mini APP Time: ', Date.now());
  next();
});

// GET: fetch tasks
router.get('/', controller.fetch);
// GET: fetch a task by id
router.get('/:id', auth, controller.read);
// define the about route
router.post('/', auth, controller.create);
// PATCH: update a task
router.patch('/:id', auth, owner, controller.update);

// DELETE: delete a task
router.delete('/:id', auth, controller.delete);

module.exports = router