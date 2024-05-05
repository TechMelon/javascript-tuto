// this refers current context
// context means variable or value
const user = {
    username: "Melon",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "sneha"
user.welcomeMessage()

console.log(this);

function pani(){
    let username = "MeloN"
    console.log(this.username);
}
pani()


const paani = function () {
    let username = "MeloN"
    console.log(this.username);
}
pani()

const panii = () => {
    let username = "MeloN"
    console.log(this);
}
pani()

const addTwo = (num1,num2) => {
    return num1 + num2
}
// explict return.
console.log(addTwo(5,5));

// const addTwoo = (num1,num2) => num1 + num2
// const addTwoo = (num1,num2) => (num1 + num2)
// implict return.
const addTwoo = (num1,num2) => ({username: "Melon"})
console.log(addTwoo(5,5));

