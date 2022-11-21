const { readFileSync } = require("fs");

let users = [
    { "id": 1, "name": "Mahfujur Rahman" },
    { "id": 2, "name": "Rikta Rahman" },
    { "id": 3, "name": "Koly Akter" },
    { "id": 4, "name": "Mst. Sraboni" },
]

module.exports.getAllUsers = async (req, res) => {
    res.json(users)
};

module.exports.saveAUsers = (req, res) => {
    console.log(req.body);
    users.push(req.body)
    res.send(users)
};

module.exports.getRandomUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find(user => user.id === Number(id))
    res.send(foundUser)
};

module.exports.updateUsers = (req, res) => {
    // const newData = req.body;
    const { id } = req.params;
    const filter = { _id: id };
    const newData = users.find(user => user.id === Number(id));

    newData.id = id;
    newData.name = req.body.name;

    res.send(newData);
}

module.exports.deleteUsers = (req, res) => {
    const {id} = req.params;
    const filter = {_id: id};

    users = users.filter(user => user.id !== Number(id));

    res.send(users);
}