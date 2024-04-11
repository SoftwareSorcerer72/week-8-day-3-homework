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