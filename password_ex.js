// this is a simple program for website password

// const password = "860404";
// let userInput = prompt("Please enter a password.");

// while(userInput!=password){
//     userInput = prompt("You got wrong. Please try again.");
// }
// alert("Correct!");

class Phone{
    constructor(model, age, color, price){
        this.model = model;
        this.age = age;
        this.color = color;
        this.price = price;
    }

    show(){
        for (let [key, value] of Object.entries(this)){
            document.write(key, ": ", value, "<br>");
        }
    }
}

class User{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    addPhone(phone){
        this.phone = phone;
        document.write("<hr>", this.name, " got a new phone!<br>")
        this.phone.show();
    }

    registPhoneNumber(){
        this.phoneNumber = prompt("Please enter your phone number.");
        document.write(this.name, "'s phone number is ", this.phoneNumber, "<br>");
    }
    
    dell(phoneNumber){
        document.write(this.name, " dell ", phoneNumber, ".<br>");
    }


};

const studentA = new User("Jason", 22, "Male");
const iphone = new Phone("ios", 0, "white", 21550);
document.write("<h1>My account book</h1><hr>");
for(const [key, value] of Object.entries(studentA)){
    document.write(key, ": ", value, "<br>");
};
studentA.addPhone(iphone);
studentA.dell("0988333848");
// event listener
let button = document.getElementById("btn");
button.addEventListener("click", function(){
    this.innerText = "goofy";
    this.style.color = "navy";
    this.style.width = "200px";
    this.style.height = "100px";
    this.style.fontSize = "50px";
    alert("How dare you?");
})


/*
Object.entries(userInformation).forEach(([key, value]) => {
    document.write(key, ": ", value, "<br>");
}); // iterating through an object
*/

