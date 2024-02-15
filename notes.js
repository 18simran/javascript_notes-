'use strict';
console.log('hii');
//Dates
const now = new Date();
console.log(now);
console.log(new Date('February 2,2024')); //need to confirm
console.log(new Date(2024, 10, 19, 15, 23, 5));
console.log(new Date(0));
//workig with dates
// const future = new Date(2037, 10, 19, 15, 23, 25, 25);
const future = new Date();
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.getMilliseconds());
console.log(future.toISOString());
console.log(future.getTime());
console.log(Date.now());
future.setFullYear(2040);
console.log(future); // returns milliseconds
const calcdayPassed = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));
const days1 = calcdayPassed(new Date(2037, 3, 14), new Date(2037, 4, 24));
console.log(days1);

//Intl.DateTimeFormat - to format dates
const now1 = new Date();
const options = {
  day: 'numeric',
  date: 'numeric',
  month: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};
console.log(now1);
console.log(now1.getDate());
// console.log(Intl.DateTimeFormat('en-UK').format(now1));
console.log(Intl.DateTimeFormat('en-US', options).format(now1));
// we can change formatting according to different languages and different countries time

//Intl.NumberFormat - toformat numbers
const num = 3884764.23;
const options1 = {
  style: 'unit', //currency then must have to define currency
  // unit: 'mile-per-hour', //can read another units in documentation
  unit: 'celsius',
  currency: 'EUR',
  useGrouping: false, //remove separators like commas
};
console.log(Intl.NumberFormat('en-US').format(num));
console.log('US:  ', new Intl.NumberFormat('en-US', options1).format(num));
//de-DE ,ar-SY
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language).format(num)
);
// 🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼
// TIMERS - TWO TYPES
// 1. SETTIMEOUT - timers runs just once after a defined time
// 2. SETINTERVAL - keeps running forever until we stop it
const ingredients = ['olives', 'spinach'];

// setTimeout(
//   (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} `),
//   3000,
//   'simran',
//   'smaeyra'
// );
// const pizzaTimer = setTimeout(
//   (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} `),
//   // 3000,
//   ...ingredients
// );
console.log('waiting....');
// console.log(pizzaTimer);
// if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

//setInterval function
// const hour = now.getHours();
// const mint = now.getMinutes();
// setInterval(function () {
//   const now = new Date();
//   const sec = now.getSeconds();
//   console.log(`${hour}:${mint}:${sec}`);
// }, 1000);

// 🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄
// selecting and deleting elements
const heading = document.querySelector('.main-heading');
const parag = document.querySelector('.para');
// parag.classList.add('hiii');
// console.log(parag);
// parag.innerHTML = 'i am doing all right.';
// heading.prepend(parag);
//some methods
const h1 = document.querySelector('h1');
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);

console.log(h1.parentNode);
console.log(h1.parentElement);
// h1.closest('.header').style.background = 'var(--gradient-secondary)';
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.previousSibling);
console.log(h1.nextSibling);
console.log(h1.parentElement.children);
console.log(h1.firstChild);
console.log(h1.lastChild);
// console.log(h1.firstElementChild);
// console.log(h1.lastElementChild);
console.log('STARTING TAB PROJECT');
const tabs = document.querySelector('.all_tabs');
const btns = document.querySelectorAll('.btn');
const content = document.querySelectorAll('.operation_content');
console.log(content);
tabs.addEventListener('click', function (e) {
  const clicked = e.target;
  content.forEach((c) => c.classList.remove('operation-content-active'));
  document
    .querySelector(`.operation-content-${clicked.dataset.tab}`)
    .classList.add('operation-content-active');
});

// 🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄
//  INTERSECTION OBSERVER API
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting);
      // if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    // threshold: 1,
    rootMargin: '-150px',
  }
);
cards.forEach((card) => {
  observer.observe(card);
});

//SLIDER images
const leftBtn = document.querySelector('.slider__btn--left');
const rightBtn = document.querySelector('.slider__btn--right');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let curSlide = 0;
const maxSlide = slides.length;

slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
};
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};
rightBtn.addEventListener('click', nextSlide);
leftBtn.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'ArrowLeft') prevSlide();
  e.key === 'ArrowRight' && nextSlide();
});

//OOPS
console.log('STARTING OOPS');
//constructor functions : Detailed description on notebook
class Details {
  constructor(firstName, lastName) {
    //instance properties
    this.Name = firstName;
    this.surName = lastName;
    this.year = 2037;
    //Never to do this coz it ruins performance of code instead we use prototypes
    // this.cacAge = function () {
    //   console.log(2037 - this.year);
    // };
  }
}
const simran = new Details('simran', 'kaur');

//now we can as many as objects we want to using constructor function
const smaeyra = new Details('smaeyra', 'Rathore');
// console.log(simran);
console.log(simran, smaeyra);
const Harman = {
  Name: 'Shreya',
  surName: 'kapoor',
};
console.log(Harman.Name);
//instanceOf method
console.log(simran instanceof Details);
//PROTOTYPES
Details.prototype.clacAge = function () {
  console.log(2037 - this.year);
};
simran.clacAge();
console.log(Details.prototype.isPrototypeOf(simran));
console.log(simran.__proto__.__proto__);
console.dir(Details.prototype.constructor);
const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);

console.log(arr.__proto__ === Array.prototype);
Array.prototype.unique = function () {
  [...new Set(this)];
};
console.log(arr.unique());
//challenge 1
class Car {
  constructor(carName, speed) {
    this.carName = carName;
    this.speed = speed;
  }
}
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.carName} is going at ${this.speed}`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.carName} is going at ${this.speed}`);
};
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
bmw.accelerate();
bmw.brake();

//CLASSES🦄

// const PersonCl = class {}; //class expressions
class PersonCl {
  //class declaration
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}
const jessica = new PersonCl('Jessica', 2015);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === PersonCl.prototype);
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jessica.greet();
//classes are not hoisted -This means you must declare a class before you can instantiate it. Attempting to use a class before its declaration results in a ReferenceError.
//classes are first class citizens -a first-class citizen (or first-class object) is an entity that can be passed as an argument
//classes are executed in strict mode
let a = 35; //strict mode means we have to define whether a variable is var,let or const
console.log(a);

//GETTERS AND SETTERS
//static method
class Animal {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log(`Animal ${Animal.capitalize(this.name)} is walking`);
  }
  static capitalize(name) {
    return name.charAt(0).toUpperCase() + name.substr(1, name.length);
  }
}
const dogi = new Animal('tuffy');
dogi.walk();
//object.create
const PersonProto = {
  clacAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const ob1 = Object.create(PersonProto);
console.log(ob1);
ob1.name = 'payal';
ob1.birthYear = 2003;
ob1.clacAge();
const ob2 = Object.create(PersonProto);
ob2.init('sarah', 1979);
ob2.clacAge();

//challenge 2
class nCar {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.name} is going at ${this.speed}`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.name} is going at ${this.speed}`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
const ford = new nCar('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

//inheritance
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const sofia = new Person('sofia', 2003);
console.log(sofia);
const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear; instead of duplicating the same things we can call person function
  Person.call(this, firstName, birthYear);
  this.course = course;
};
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
};
const Mike = new Student('Mike', 2020, 'Computer Science ');
Mike.introduce();
