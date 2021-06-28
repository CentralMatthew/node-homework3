const { userService } = require('../services');
const { errors } = require('../constants');

module.exports = {

    userIsNotExist: async (req, res, next) => {
        const { userId } = req.params;
        const userById = await userService.findUserById(userId);

        if (!userById) {
            throw new Error(errors.USER_IS_NOT_EXIST);
        }

        req.body = userById;

        next();
    },

    validValues: (req, res, next) => {
        const {
            name, age, student, email, password
        } = req.body;

        if (typeof name !== 'string' || typeof age !== 'number' || typeof student !== 'boolean'
            || typeof email !== 'string' || typeof password !== 'string') {
            throw new Error(errors.INVALID_KEY_VALUE);
        }

        next();
    },

    isEmailBusy: async (req, res, next) => {
        const { email } = req.body;
        const users = await userService.findAllUsers();
        const busyEmail = await users.find((user) => user.email === email);

        if (busyEmail) {
            throw new Error(errors.EMAIL_IS_NOT_AVAILABLE);
        }

        next();
    }
};
