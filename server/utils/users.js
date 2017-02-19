class Users {
  constructor(){
    this.users = [];
  }
  addUser(id, name, room) {
    var user = {id,name,room};
    this.users.push(user);
    return user;
  }
  removeUser(id) {
    //return user that was removed
    var user =this.getUser(id);
    if(user) {
      this.users = this.users.filter((user) => user.id !== id);
    }
    return user;
  }
  getUser(id){
    return this.users.filter((user) => user.id === id)[0];
  }
  getUserList(room) {
    var users = this.users.filter((user) => {
      return user.room === room;
    });
    var namesArray = users.map((user) => {
      return user.name;
    });
    return namesArray;
  }
}
module.exports = {Users};

// class Person {
//   constructor(name, age) {
//     //this refers to the instance not the class
//     this.name = name;
//     this.age = age;
//   }
//
//   //methods
//   getUserDescription() {
//     return `${this.name} is ${this.age} year(s) old.`;
//   }
// }
//
// var me = new Person('Erwin', 37);
// var description = me.getUserDescription();
// console.log(description);
