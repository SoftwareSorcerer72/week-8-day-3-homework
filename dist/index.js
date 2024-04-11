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
