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
  protected courseCount: number = 1
  readonly city: string = 'Deoli'
  constructor(public name: string, private email: string) {
    this.name = name
    this.email = email
  }

  get getAppleEmail(): string {
    return `apple${this.email}`
  }

  get getCourseCount(): number {
    return this.courseCount
  }

  set setCourseCount(courseNum: number) {
    if (courseNum <= 1) {
      throw new Error('Course count should be more than 1')
    }
    this.courseCount = courseNum
  }

  private deleteToken() {
    console.log('Token deleted')
  }
}

class SubUser extends User {
  isFamily: boolean = true
  changeCourseCount() {
    this.courseCount = 4 // can be accessible 'cause it is protected.
  }
}

const vaibhav = new User('vaibhav', 'vaibhav@v.c')
