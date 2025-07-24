



//========================== Object ========================>
const person = {
  name: "Mohamed",
  age: 21,
};

person.gender = "Male";
delete person.age;

console.log(person.name); 
console.log(person["gender"]); 

//========================== Object loop ========================>
for (let key in person) {
  console.log(key + ": " + person[key]);
}

//========================== different array methods  ========================>
const numbers = [1, 2, 3, 4, 5];


const multiple = numbers.map(n => n * 2);
console.log(multiple); 


const even = numbers.filter(n => n % 2 === 0);
console.log(even); 


numbers.forEach(n => console.log(n));


const total = numbers.reduce((cac, curr) => acc + curr, 0);
console.log(total); 

const ascending = [numbers].sort((a, b) => a - b);
console.log(ascending); 

//========================== differant types of function  ========================>


function greet(name = "mohamed") {
  console.log("Hello " + name+"morning");
}
greet();

(function () {
  console.log("This runs immediately!");
})();


sayHello();
function sayHello() {
  console.log("hello eveyrone!");
}


function outer() {
  let count = 0;
  return function () {
    count++;
    console.log("Count:", count);
  };
}
const counter = outer();
counter();
counter();

//==========================Event loop in browser ========================>
console.log("Start");
setTimeout(() => console.log("Timeout done"), 1000);
console.log("End");

//========================== Promises task ========================>
const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) resolve("Task Success");
  else reject("Task Failed");
});

myPromise.then(res => console.log(res)).catch(err => console.log(err));




//========================== Class inheritance , polymorphism. ========================>
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

const myDog = new Dog();
myDog.speak(); 

const myAnimal = new Animal();
myAnimal.speak(); 


