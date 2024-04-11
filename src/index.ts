import { v4 as uuidv4 } from 'uuid';

type vehicle = {
    id: string;
    name: string;
    price: number;
    description: string;
};


type user = {
    id: string;
    name: string;
    age: number;
    cart: (vehicle)[];
}


function createUser(name: string, age: number): user {
  return {
    id: uuidv4(),
    name: name,
    age: age,
    cart: [],
  };
}

let newUser1 = createUser("Mike Welborn", 33);
console.log(newUser1);


function createItem(name: string, price: number, description: string): vehicle {
    return {
      id: uuidv4(),
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

function addToCart(user: user, item: vehicle): void {
    user.cart.push(item);
  }


  addToCart(newUser1, newVehicle1);
  console.log(newUser1);

  function removeFromCart(user: user): void {
    user.cart = [];
  }

  removeFromCart(newUser1);
console.log(newUser1);