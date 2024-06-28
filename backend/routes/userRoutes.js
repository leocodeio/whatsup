const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.post('/search-user', userController.searchUser);
router.post('/connects', userController.updateConnects);

module.exports = router;
