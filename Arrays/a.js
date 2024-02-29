console.log('hiii');
//array methods
arr = [100, 200, 250, 300, 350, 400, 500];
//slice doesn't mutate array but create new array
console.log(arr.slice(2));
console.log(arr);
//splice mutate original array
arr.splice();
console.log(arr);
//reverse
console.log(arr.reverse());
//concat
arr1 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr1.concat(arr));
//join
arr1 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr1.join('-'));
//at - to get index
console.log(arr);
console.log(arr.at(2));
console.log(arr.slice(-1).at(0));

//looping over array

// I apologize for the confusion in my previous responses. I appreciate your patience. The entries() method is not necessary in this specific case. I made an error in my explanation.
// In JavaScript, the entries() method is used with arrays to get an iterator that returns the array's key/value pairs. However, in your original code, the for...of loop is used with the array directly, and there's no need to use entries().
for (const [i, item] of arr.entries()) {
  if (item > 300) {
    console.log(`at ${i + 1} ,still got ${item} rupees.`);
  } else {
    console.log(`at ${i + 1}, less money left,only ${item} rupees.`);
  }
}
//using forEach method for arrays
arr.forEach(function (item) {
  if (item > 300) {
    console.log(`still got ${item} rupees.`);
  } else {
    console.log(`less money left,only ${item} rupees.`);
  }
});
//for maps
const data = [
  ['password', 235454],
  ['name', 'simran kaur'],
  ['class', '12th'],
  ['pin', 258],
];
const dataMap = new Map(data);
console.log(dataMap);
dataMap.forEach(function (key, value) {
  console.log(`The key is ${key}, having ${value} value .`);
});
// for sets
set1 = ['code', 'book', 'tired', 'as', 'fuck'];
const mySet = new Set(set1);
console.log(mySet);
mySet.forEach(function (index, value) {
  console.log(`the value is ${index} : ${value}`);
});
//. map is an array method and cannot be used on numbers.
//challenge
dogData1 = [5, 2, 4, 1, 15, 8, 3];
dogData2 = [16, 6, 10, 5, 6, 1, 4];
const humanAge = [];
const calcAge = function (data) {
  // data.forEach(function (dog) {
  const age = data.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(age);
  const adults = age.filter((mov) => mov >= 18);
  console.log(adults);
  const average = adults.reduce((mov, acc) => acc + mov, 0) / adults.length;
  console.log(average);
};
calcAge(dogData1);
calcAge(dogData2);

//sort method
arr = ['simran', 'aryan', 'smaeyra', 'vaibhav'];
console.log(arr.sort());
console.log(arr);
const num = [200, 1400, 100, 500, 5050];
console.log(num.sort());

//flatMap
arrDeep = [[4, 2], 3, 1];
console.log(arr.flatMap((mov) => mov >= 2));
console.log(arr);
//to sort array in ascending order
console.log(
  arrDeep.flat(1).sort((a, b) => {
    if (a > b) return 1;
    if (b > a) return -1;
  })
); //returning new array
console.log(arrDeep); //return original array

//another method to declare an array
console.log('Another method to declare an array');
const arrN = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//creating an empty array and filling using fill method
const x = new Array(7);
// x.fill(2); fill all the places with number 2
// x.fill(2, 2); start filling 2 from the location 2+1
x.fill(2, 2, 5);
// start filling to from location 2 + 1 till 5
console.log(x);
arrN.fill(25, 5, 6); //mutate original array
console.log(arrN);

//Array.from here Array is a function
const y = Array.from({ length: 7 }, () => 1);
console.log(y);
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

//challenge

const dogs = [
  {
    weight: 22,
    curFood: 250,
    owners: ['Alice', 'Bob'],
  },
  {
    weight: 8,
    curFood: 600,
    owners: ['Matilda'],
  },
  {
    weight: 13,
    curFood: 275,
    owners: ['Sarah', 'John'],
  },
  {
    weight: 32,
    curFood: 340,
    owners: ['Michael'],
  },
];
//1
dogs.forEach((mov) => (mov.recommendedFood = mov.weight ** 0.75 * 28));
console.log(dogs);
console.log('hii');
//2
const dogFound = dogs.find((dog) => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eating too ${
    dogFound.curFood > dogFound.recommendedFood ? 'much' : 'little'
  }`
);
//3

const ownerEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood)
  .flatMap((dog) => dog.owners);
console.log(ownerEatTooMuch);

const ownerEatLittle = dogs
  .filter((dog) => dog.curFood < dog.recommendedFood)
  .flatMap((dog) => dog.owners);
console.log(ownerEatLittle);
