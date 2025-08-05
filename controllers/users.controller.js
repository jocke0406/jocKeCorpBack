const users = [
    {
        id: 1,
        firstName: 'Walter',
        lastName: 'White',
    },
    {
        id: 2,
        firstName: 'Saul',
        lastName: 'Goodman',
    },
];

exports.list = (req, res) => {
    res.status(200).json(users);
};
