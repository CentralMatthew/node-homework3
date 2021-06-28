const { userService } = require('../services');

module.exports = {
    userIsNotExist: async (req, res, next) => {
        const { userId } = req.params;
        const userById = await userService.findUserById(userId);
        if (!userById) {
            throw new Error('user not found');
        }
        req.body = userById;

        next();
    },
    validValues: (req, res, next) => {
        const { name, age, student } = req.body;
        if (typeof name !== 'string' || typeof age !== 'number' || typeof student !== 'boolean') {
            throw new Error('Invalid value in keys');
        }
        next();
    }

};
