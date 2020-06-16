interface IInfo {
  name: string;
  age: number;
  address: string;
};

type TConstructor = new () => Object;

const Info = (info: IInfo) => {
  const { name, age, address } = info;
  
  return (constructor: TConstructor) => {
    return class extends constructor {
      name = name;
      age = age;
      address = address;
    };
  };
};

@Info({
  name: 'Andrew',
  age: 25,
  address: 'Lviv'
})
class AngularDeveloper {};

@Info({
  name: 'Stephen',
  age: 30,
  address: 'NY'
})
class Human{};

const human = new Human();
const developer = new AngularDeveloper();

console.log(human);
console.log(developer)
