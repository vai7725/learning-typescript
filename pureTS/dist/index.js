"use strict";
// class User {
//   public name: string
//   private email: string
//   readonly city: string = 'Deoli'
//   constructor(name: string, email: string) {
//     this.name = name
//     this.email = email
//   }
// }
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.courseCount = 1;
        this.city = 'Deoli';
        this.name = name;
        this.email = email;
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get getCourseCount() {
        return this.courseCount;
    }
    set setCourseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('Course count should be more than 1');
        }
        this.courseCount = courseNum;
    }
    deleteToken() {
        console.log('Token deleted');
    }
}
const vaibhav = new User('vaibhav', 'vaibhav@v.c');
