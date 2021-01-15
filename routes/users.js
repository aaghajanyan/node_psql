const express = require('express');
const router = express.Router();

const UserController = require('../controllers/users');
const UserValidation = require('../validations/users');

router.get('/', UserController.getUsers);
router.post('/', UserValidation.validateAddBody, UserController.createUser);

module.exports = router;
