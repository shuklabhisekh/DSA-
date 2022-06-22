// function User(name, age) {
//   (this.name = name), (this.age = age);
// }
// User.prototype.a = "a";
// console.log(User.prototype);

// const user1Moredetail = new User("abhishek", 20);
// console.log(user1Moredetail);

class User {
  constructor(name, age, gender) {
    (this.name = name), (this.age = age), (this.gender = gender);
  }
  findAge() {
    console.log(`${this.name} is ${this.age} yrs old`);
  }
  findGender() {
    console.log(`${this.name} is ${this.gender}`);
  }
}

const aman = new User("aman", 23, "male");
const jay = new User("jay", 18, "male");

console.log(Object.getPrototypeOf(aman))
