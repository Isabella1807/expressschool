const {getAllUsersFromDB, getUserByIdFromDB} = require("../Model/userModel");

//for at køre: node Controller/userController.js

const getAllUsers = (req, res) => {
    res.send(getAllUsersFromDB())
}

const getUserById = (req, res) => {
    const userId = Number(req.params.userid);
    const user = getUserByIdFromDB(userId);

    if (user) {
        res.send(user);
    } else {
        res.send('User not found')
    }
}

module.exports = {
    getAllUsers,
    getUserById,
}
