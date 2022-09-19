const usersDB = [
    {
        id: 1,
        name: "John",
        surname: "Fox",
        isMale: true,
        age: 20
    },
    {
        id: 2,
        name: "Tom",
        surname: "Smith",
        isMale: true,
        age: 22
    },
    {
        id: 3,
        name: "Ann",
        surname: "Gran",
        isMale: false,
        age: 20
    }
];

class Users{
    constructor(users){
        this.users = [...users];
    }
    createUser(user){
        this.users.push({...user, id: this.users[this.users.length -1].id + 1});
        const newUser = this.users[this.users.length - 1];
        return newUser;
    }
    getUserById(id){
        const foundIndex = this.users.findIndex((u) => u.id === Number(id));
        return foundIndex === -1 ? null : this.users[foundIndex];
    }
    getAllUsers(){ 
        return [...this.users];
    }
    updateUser(id, newInfo){
        const foundIndex = this.users.findIndex((u) => u.id === Number(id));
        return foundIndex === -1 ? null : this.users[foundIndex] = {
            ...this.users[foundIndex],
            ...newInfo,
        };
    }
    deleteUser(id){
        const foundIndex = this.users.findIndex((u) => u.id === Number(id));
        return foundIndex === -1 ? null : this.users.splice(foundIndex, 1);
    }
}

const usersModel = new Users(usersDB);

module.exports = usersModel;