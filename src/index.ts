import { v4 as uuidv4 } from 'uuid';

type car = {
    id: string;
    name: string;
    price: number;
    description: string;
  };


type truck = {
    id: string;
    name: string;
    price: number;
    description: string;
  };

type suv = {
    id: string;
    name: string;
    price: number;
    description: string;
  };

type user = {
    id: string;
    name: string;
    age: number;
    cart: (car | truck | suv)[];
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
