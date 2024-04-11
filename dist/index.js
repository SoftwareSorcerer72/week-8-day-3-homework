"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
function createUser(name, age) {
    return {
        id: (0, uuid_1.v4)(),
        name: name,
        age: age,
        cart: [],
    };
}
let newUser1 = createUser("Mike Welborn", 33);
console.log(newUser1);
function createItem(name, price, description) {
    return {
        id: (0, uuid_1.v4)(),
        name: name,
        price: price,
        description: description,
    };
}
let newVehicle1 = createItem("Tesla Model S", 79000, "Electric car");
console.log(newVehicle1);
let newVehicle2 = createItem("Mazda CX-5", 25000, "SUV");
console.log(newVehicle2);
let newVehicle3 = createItem("Toyota Camry", 24000, "Sedan");
console.log(newVehicle3);
function addToCart(user, item) {
    user.cart.push(item);
}
addToCart(newUser1, newVehicle1);
console.log(newUser1);
function removeFromCart(user) {
    user.cart = [];
}
removeFromCart(newUser1);
console.log(newUser1);
