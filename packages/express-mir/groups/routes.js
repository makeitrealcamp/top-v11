const express = require('express');
const router = express.Router();
const controller = require('./controller');
const { auth } = require('../auth');

// GET: fetch groups
router.get('/', controller.fetch);
// GET: fetch an group by id
router.get('/:id', controller.read);
// POST: create an group
router.post('/', auth, controller.create);

module.exports = router;