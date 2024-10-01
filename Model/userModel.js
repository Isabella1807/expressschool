const userArray = [
    {
        brugernavn: "isab",
        id: 1
    },
    {
        brugernavn: "bob",
        id: 2
    },
    {
        brugernavn: "bubber",
        id: 3
    },
    {
        brugernavn: "womp",
        id: 4
    },
    {
        brugernavn: "hejsa",
        id: 5
    }
];

const getAllUsersFromDB = () => {
    return userArray
}

const getUserByIdFromDB = (userid) => {
    return userArray.find((user) => user.id === userid)
}

module.exports = {
    getAllUsersFromDB,
    getUserByIdFromDB
}