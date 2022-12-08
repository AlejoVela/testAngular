const UserController = require('../controllers/user');
const router = require('express').Router();
const authMiddleware = require('../middleware/auth');

router.post('/user', UserController.registerUser);
router.post('/user/login', UserController.login);
router.get('/user', authMiddleware, UserController.listUser);

module.exports = router;