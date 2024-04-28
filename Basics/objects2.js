const tinderUser = new Object()
// singleton
// const tinderUser= {}
// non-singleton

tinderUser.id = "abcd98"
tinderUser.name = "charcol"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "melon@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sneha",
            lastname: "Bhardwaj"
        }
    }
}

console.log(regularUser.fullname.userfullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}

const obj4 = {obj1, obj2, obj3}
console.log(obj4);

// const obj5 = Object.assign({}, obj1,obj2,obj3)

const obj5 = {...obj1[1],...obj2,...obj3}

console.log(obj5);

const users = [
    {
        id: 1,
        email: "tech@gmail.com"
    },
    {
        id: 2,
        email: "tech@gmail.com"
    },
    {
        id: 3,
        email: "tech@gmail.com"
    },
]

users[1].email
console.log(users[1]);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "javascript course",
    price: "9999",
    courseInstructor: "Melon"
}

// course.courseInstructor

const {courseInstructor: instructor} = course //good way

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Melon",
//     "coursename": "javascript course",
//     "price": "9999"
// }

[
    {},
    {},
    {}
]
