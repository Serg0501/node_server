// --------------------------- 17.09.22

//const express = require('express');

//const app = express();

//app.get('/', (req, res) => {
//    console.log('request:', req);
//    res.status(200).end();
//});

//app.post('/users', (req, res) => {
//    const {body} = req;
//    //const newUser = db.Users.createUser(body); // db[] 
//    //res.status(201).send(newUser);
//    res.status(201).send(body);
//});

//app.get('users/id', (req, res) => {
//    // обращение к базе и взять юзера по номеру id
//    res.status(200).send();
//})

/*
GET http://127.0.0.1:5000/users HTTP/1.1
GET http://127.0.0.1:5000/users/10 HTTP/1.1
*/

/*
app.get('/users/id', (req, res) => {})
app.get('/users/', (req, res) => {})
app.post('/users/', (req, res) => {})
app.patch('/users/id', (req, res) => {})
app.delete('/users/id', (req, res) => {})
*/

//module.exports = app;

// -------------------------------- 18.09.22

//const express = require('express');

//const app = express();

//app.use('/', express.static('public'));

//app.use('/', (req, res) => {
//    res.status(200).sendFile(path.resolve(_dirname, '404.html'));
//});

//module.express = app;

// -------------------------------------

// const express = require('express');

// const app = express();
// app.use(express.json());

// const usersDB = [
//     {
//         id: 1,
//         name: "Sam",
//         surname: "Cook",
//         isMale: true,
//         age: 35
//     },
//     {
//         id: 2,
//         name: "Jane",
//         surname: "Fogel",
//         isMale: false,
//         age: 29
//     },
//     {
//         id: 3,
//         name: "Steve",
//         surname: "Minus",
//         isMale: true,
//         age: 80
//     }
// ];

// class Users{
//     constructor(users){
//         this.users = [...users];
//         this.count = users.length;
// //users[users.length -1].id + 1
//     }
//     createUser(user){
//         this.count++;
//         this.users.push({...user, id: this.count});
//         return this.users[this.count - 1];
//     }
//     getUserById(id){
//         const foundIndex = this.users.findIndex((u) => u.id === Number(id));
//         return foundIndex === -1 ? null : this.users[foundIndex];
//     }
//     getllUsers(){ 
//         return [...this.users];
//     }
//     updateUser(id, newInfo){
//         const foundIndex = this.users.findIndex((u) => u.id === Number(id));
//         return foundIndex === -1 ? null :
//             this.users[foundIndex] = {
//                 ...this.users[foundIndex],
//                 ...newInfo,
//         };
//         return this.users[foundIndex];
//     }
//     deleteUser(id){
//         const foundIndex = this.users.findIndex((u) => u.id === Number(id));
//         this.count--;
//         return foundIndex === -1 ? null : this.users.splice(foundIndex, 1);
//     }
// }

// const usersInstance = new Users(usersDB);

// // CRUD for user / controller for user

// // get all users
// app.get("/users", (req, res) => {
//     const data = usersInstance.getAllUsers();
//     res.status(200).send(data);
// });

// // get user by id
// app.get("/users/:id", (req, res) => {
//     const {id} = req.params;
//     const foundUser = usersInstance.getUserById(id);
//     res.status(200).send(foundUser);
// });

// // add new user 
// app.post("/users", (req, res) => {
//     const {body} = req;
//     const newUser = usersInstance.createUser(body);
//     res.status(201).send(foundUser);
// });

// //update info for user by id
// app.patch("/users/:id", (req, res) => {
//     const {id} = req.params;
//     const {body} = req;
//     const foundUser = usersInstance.updateUser(id, body);
//     res.status(200).send(foundUser);
// });

// // delete user by id
// app.delete("/users/:id", (req, res) => {
//     const {id} = req.params;
//     const foundUser = usersInstance.deleteUser(id);
//     res.status(200).send(foundUser);
// });

// module.express = app;

// ------------------------
// Выделение контроллера

const express = require('express');
const {userController} = require('./controllers');
const {validate} = require('./middleware');

const app = express();
app.use(express.json());

// users
app.get("/users", userController.getAllUsers);
app.get("/users/:id", userController.getUser);

app.post("/users", validate.validateUserCreate, userController.createNewUser);

app.patch("/users/:id", userController.updateUser);

app.delete("/users/:id", userController.deleteUser);

module.exports = app;