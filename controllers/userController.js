// // db
// const usersDB = [
//     {
//         id: 1,
//         name: "John",
//         surname: "Fox",
//         isMale: true,
//         age: 20
//     },
//     {
//         id: 2,
//         name: "Tom",
//         surname: "Smith",
//         isMale: true,
//         age: 22
//     },
//     {
//         id: 3,
//         name: "Ann",
//         surname: "Gran",
//         isMale: false,
//         age: 20
//     }
// ];

// class Users{
//     constructor(users){
//         this.users = [...users];
//         this.count = users.length; //users[users.length -1].id + 1
//     }
//     createUser(user){
//         this.count++;
//         this.users.push({...user, id: this.count});
//         const newUser = this.users[this.count - 1];
//         return newUser;
//     }
//     getUserById(id){
//         const foundIndex = this.users.findIndex((u) => u.id === Number(id));
//         return foundIndex === -1 ? null : this.users[foundIndex];
//     }
//     getAllUsers(){ 
//         return [...this.users];
//     }
//     updateUser(id, newInfo){
//         const foundIndex = this.users.findIndex((u) => u.id === Number(id));
//         return foundIndex === -1 ? null : this.users[foundIndex] = {
//             ...this.users[foundIndex],
//             ...newInfo,
//         };
//     }
//     deleteUser(id){
//         const foundIndex = this.users.findIndex((u) => u.id === Number(id));
//         this.count--;
//         return foundIndex === -1 ? null : this.users.splice(foundIndex, 1);
//     }
// }

// const usersModel = new Users(usersDB);


// // ---------------------------------------------------

// module.exports.getAllUsers = (req, res) => {
//     const data = usersModel.getAllUsers();
//     res.status(200).send(data);
// };

// module.exports.getUser = (req, res) => {
//     const {id} = req.params;
//     const foundUser = usersModel.getUserById(id);
//     res.status(200).send(foundUser);
// };

// module.exports.createNewUser = (req, res) => {
//     const { body } = req;
//     const newUser = usersModel.createUser(body);
//     res.status(201).send(newUser);
// };

// module.exports.updateUser = (req, res) => {
//     const {id} = req.params;
//     const {body} = req;
//     const foundUser = usersModel.updateUser(id, body);
//     res.status(200).send(foundUser);
// };

// module.exports.deleteUser = (req, res) => {
//     const {id} = req.params;
//     const foundUser = usersModel.deleteUser(id);
//     res.status(200).send(foundUser);
// };

// -------------------------------------
//


const {Users} = require('./../models');

//crud

module.exports.getAllUsers = (req, res) => {
    const data = Users.getAllUsers();
    res.status(200).send(data);
};

module.exports.getUser = (req, res) => {
    const {id} = req.params;
    const foundUser = Users.getUserById(id);
    if(foundUser){ 
        res.status(200).send(foundUser); 
        return; 
    }
    res.status(404).send(`User #${id} not found in data base`); 
};

module.exports.createNewUser = (req, res) => {
    const { body } = req;
    const newUser = Users.createUser(body);
    res.status(201).send(newUser);
};

module.exports.updateUser = (req, res) => {
    //const {id} = req.params;
    //const {body} = req;
    const {
        body,
        params: {id}
    } = req;
    const foundUser = Users.updateUser(id, body);
    if(foundUser){ 
        res.status(200).send(foundUser); 
        return; 
    }
    res.status(404).send(`User #${id} not found in data base`); 
};

module.exports.deleteUser = (req, res) => {
    const {id} = req.params;
    const foundUser = Users.deleteUser(id);
    if(foundUser){ 
        res.status(200).send(foundUser); 
        return; 
    }
    res.status(404).send(`User #${id} not found in data base`); 
};