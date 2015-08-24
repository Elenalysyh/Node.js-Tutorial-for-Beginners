
//// Object in Nodejs is extet the same in JS
//var person = {
//    firstName: "Petr",
//    secondName: "Petrov",
//    age: 22,
//    adress: {city:"Kharkiv",
//             street:"Centre av",
//             house: 15
//    }
//};
//console.log("personal date", person);
//
////
//function square(a,b) {
//    return a*b;
//};
//console.log("square",square(5,8));
//
//// ---- lesson 4
//function placeOrder(orderNumber) {
//    console.log("Customer order", orderNumber);
//    cookAndDelverFood(function(){
//        console.log("Delivered food order", orderNumber);
//    })
//}
//
//function cookAndDelverFood (callback) {
//    setTimeout(callback, 5000);
//}
//// Simulate users web request
//placeOrder(1);
//placeOrder(2);
//placeOrder(3);
//placeOrder(4);
//placeOrder(5);
//placeOrder(6);
//placeOrder(7);
//placeOrder(8);
//
//
//// ---- lesson 5 all is references
//var Bucky = {
//    favFood: 'bacon',
//    favMovie: 'Chappie'
//};
//
//var Person = Bucky;
//Person.favFood = 'salad';
//
//console.log(Bucky.favFood);
//
//// -- === and ==
//console.log(19 == '19') // true
//console.log(19 === '19') // false
//// --  lesson 6 --- this
var Bucky = {
    printFirstName : function() {
        console.log("my name is Bucky");
        console.log(this === Bucky);
    }
};
Bucky.printFirstName();

function dosomething() {

    console.log("\n my name is Bucky");
    console.log(this === global);
};
dosomething();


// --- lesson 7
function User() {
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife (targetPlayer) {
        targetPlayer.life +=1;
        console.log(this.name + "game 1 life to "+ targetPlayer.name);
    }
}

var Bucky = new User();
var Wendy = new User();
Bucky.name = "Bucky";
Wendy.name = "Wendy";
Bucky.giveLife(Wendy);
console.log("Bucky" + Bucky.life);
console.log("Wendy" + Wendy.life);
// Can add functions to all objects
User.prototype.uppercut = function uppercut(targetPlayer) {
    targetPlayer.life -=3;
    console.log(this.name + "just uppercutted "+ targetPlayer.name);
};
Wendy.uppercut(Bucky);
console.log("Bucky" + Bucky.life);
console.log("Wendy" + Wendy.life);
// Can add properties to all objects
User.prototype.magic = 60;
console.log(Bucky.magic);
console.log(Wendy.magic);


