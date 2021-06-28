const { userService } = require('../services');

module.exports = {
    getAllUsers: async (req, res) => {
        const users = await userService.findAllUsers();

        res.json(users);
    },

    getUserById: async (req, res) => {
        const { userId } = req.params;
        const user = await userService.findUserById(userId);

        res.json(user);
    },

    deleteUserById: async (req, res) => {
        const { userId } = req.params;

        await userService.removeUserById(userId);

        res.end();
    },

    createUser: async (req, res) => {
        await userService.addUser(req.body);

        res.end();
    },

    updateUser: async (req, res) => {
        const { userId } = req.params;

        await userService.updateUser(userId, req.body);

        res.end();
    }

};
