// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const Jsuser = {
    name:"Melon",
    "full name":"sneha bhardwaj",
    [mySym]:"mykey1",
    age:18,
    location:"midgaurd",
    email: "melon@google.com",
    isLoggedIn: false,
    lastLogininDays: ["Monday","wednesday"]    
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);

console.log(Jsuser[mySym]);

Jsuser.email = "Melon@chatgpt.com"
// Object.freeze(Jsuser)
Jsuser.email = "Melon@microsoft.com"
console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello Js user");
}
console.log(Jsuser.greeting());

Jsuser.greetingtwo = function(){
    console.log(`Hello Js user,${this.name}`);
}
console.log(Jsuser.greetingtwo());
