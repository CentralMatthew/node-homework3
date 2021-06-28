const router = require('express').Router();

const { userIsNotExist, validValues } = require('../middlewares/user.middleware');

const { userController } = require('../controllers');

router.get('/', userController.getAllUsers);

router.get('/:userId', userIsNotExist, userController.getUserById);

router.post('/', validValues, userController.createUser);

router.delete('/:userId', userIsNotExist, userController.deleteUserById);

router.patch('/:userId', validValues, userController.updateUser);

module.exports = router;
