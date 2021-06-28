const router = require('express').Router();

const { userIsNotExist, validValues, isEmailBusy } = require('../middlewares/user.middleware');

const { userController } = require('../controllers');

router.get('/', userController.getAllUsers);

router.get('/:userId', userIsNotExist, userController.getUserById);

router.post('/', validValues, isEmailBusy, userController.createUser);

router.delete('/:userId', userIsNotExist, userController.deleteUserById);

router.patch('/:userId', validValues, userController.updateUser);

module.exports = router;
