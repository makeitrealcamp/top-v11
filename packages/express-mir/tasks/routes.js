const express = require('express');
const router = express.Router();
const controller = require('./controller');

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Mini APP Time: ', Date.now());
  next();
})

// GET: fetch tasks
router.get('/', controller.fetch);
// GET: fetch a task by id
router.get('/:id', controller.read);
// define the about route
router.post('/', controller.create);
// PATCH: update a task
router.patch('/:id', controller.update);
// DELETE: delete a task
router.delete('/:id', controller.delete);

module.exports = router