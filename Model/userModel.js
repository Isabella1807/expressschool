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
    }
    ,
    {
        brugernavn: "womp",
        id: 4
    }
    ,
    {
        brugernavn: "hejsa",
        id: 5
    }
];

const getUsers = () => {
    return userArray
}

module.exports = {
    getUsers,
}