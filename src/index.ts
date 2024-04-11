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