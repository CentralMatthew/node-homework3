const fs = require('fs/promises');

const { constants } = require('../constants');

const readUsers = async () => {
    const data = await fs.readFile(constants.filePath, 'utf-8');
    return JSON.parse(data);
};

const writeUsers = async (user) => {
    await fs.writeFile(constants.filePath, JSON.stringify(user));
};

module.exports = {
    findAllUsers: async () => {
        const users = await readUsers();
        return users;
    },

    findUserById: async (userId) => {
        const user = await readUsers();
        return user[userId];
    },

    removeUserById: async (userId) => {
        const users = await readUsers();
        users.splice(userId, 1);
        await writeUsers(users);
    },

    addUser: async (newUser) => {
        const users = await readUsers();
        users.push(newUser);
        await writeUsers(users);
    },

    updateUser: async (userId, updatedUser) => {
        const users = await readUsers();
        users[userId] = { ...users[userId], ...updatedUser };
        await writeUsers(users);
    }

};
