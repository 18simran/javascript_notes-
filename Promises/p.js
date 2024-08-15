'use strict';
//🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️
let promise = new Promise(function (resolve, reject) {
  const x = 'simran';
  const y = 'smaeyra';
  if (x === y) {
    resolve(x);
  } else {
    reject(y);
  }
});
promise
  .then(function (x) {
    console.log('successful');
  })
  .catch(function (y) {
    console.log('Some error occured');
  });
console.log('🌼 Promise using arrow function 🌼');
let prom1 = new Promise((resolve, reject) => {
  if (2 > 3) {
    resolve('2 is gretaer than 3');
  } else {
    reject('2 is less than 3');
  }
});
prom1
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((reject) => {
    console.log(reject);
  });
console.log('🌼 same program using callback method 🌼');
function compareStrings(x, y, callback) {
  if (x === y) {
    callback(null, x);
  } else {
    callback('Strings do not match', y);
  }
}
compareStrings('simran', 'simran', function (error, result) {
  if (error) {
    console.log('Some error occurred');
  } else {
    console.log('Successful');
  }
});
console.log('🌼 Promise.finally method🌼');
let doIt = new Promise((resolve1, reject1) => {
  let num1 = 5;
  let num2 = 5;
  if (num1 === num2) {
    resolve1();
  } else {
    reject1();
  }
});
doIt
  .then((resolve1) => {
    console.log('Done');
  })
  .catch((reject1) => {
    console.log('Error in finally');
  })
  .finally(() => {
    console.log('Done finally');
  });
//🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️
console.log('🌼 Event bubbling and capturing 70line🌼');
const read_more = document.querySelector('.read_more');
read_more.addEventListener('click', (e) => {
  //e.stopPropagation();
  console.log('Clicked');
});
const para = document.querySelector('.para');
para.addEventListener(
  'click',
  (e) => {
    // e.stopPropagation();
    console.log('red');
    para.style.background = 'red';
  },
  true
);
const start = document.querySelector('.start');
start.addEventListener(
  'click',
  (e) => {
    //  e.stopPropagation();
    console.log('green');
    start.style.background = 'green';
  },
  true
);
//🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️🕊️
const arr = [
  'Single listener: Attach one event listener to a parent element.li',
  'Event bubbling: When a child element is clicked, the event bubbles up to the parent.',
  'Identify target: Determine which child element was clicked using  event.target.',
  'Handle event: Perform actions based on the clicked child element.',
  ' Efficiency: Reduces the number of event listeners needed, improving performance.',
];

console.log('🌼 Event Delegation 97🌼');
const list = document.querySelector('ul');
list.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    console.log(event.target.textContent);
  }
});

// document.addEventListener(
//   'load',
//   setTimeout(() => {
//     arr.forEach((item) => {
//       const li = document.createElement('li');
//       li.textContent = item;
//       list.appendChild(li);
//     });
//   }, 2000)
// );
function Person(fname, lname) {
  this.firstName = fname;
  this.lastName = lname;
}
Person.prototype.gender = 'Female';
const person1 = new Person('Simran', 'kaur');
const person2 = new Person('Pinju', 'Sharma');
console.log(person1);
Person.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
};
console.log(person1.getFullName());
