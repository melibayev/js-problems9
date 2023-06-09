// // 1
// const students = [
//     { name: "Quincy", percent: 96 },
//     { name: "Jason", percent: 84 },
//     { name: "Alexis", percent: 100 },
//     { name: "Sam", percent: 65 },
//     { name: "Katie", percent: 90 },
//     { name: "Anna", percent: 75 },
//   ];
  
//   function getNames(baho) {
//     const grades = {
//       5: { min: 85, max: 100 },
//       4: { min: 70, max: 85 },
//       3: { min: 60, max: 70 },
//     };
  
//     return students
//       .filter(student => student.percent >= grades[baho].min && student.percent < grades[baho].max)
//       .map(student => student.name);
//   }
  
//   console.log(getNames(5));
  

// // 2
// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// function countOccurrences(arr) {
//   return arr.reduce((count, animal) => {
//     count[animal] = (count[animal] || 0) + 1;
//     return count;
//   }, {});
// }

// console.log(countOccurrences(animals));


// // 3
// const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers.map(number => number ** 2);

// console.log(squaredNumbers); 



// 4
// const numbers = [1, -4, 12, 0, -3, 29, -150];

// const sumOfPositiveNumbers = numbers
//   .filter(number => number > 0)
//   .reduce((sum, number) => sum + number, 0);

// console.log(sumOfPositiveNumbers);



// 5
// const sentence = 'George Raymond Richard Martin';

// const initials = sentence
//   .split(' ')
//   .map(word => word[0])
//   .join('');

// console.log(initials); 



// // 6 
// const people = [
//     { name: 'John', age: 13 },
//     { name: 'Mark', age: 56 },
//     { name: 'Rachel', age: 45 },
//     { name: 'Nate', age: 67 },
//     { name: 'Jeniffer', age: 65 }
// ];

//     people.sort((a, b) => b.age - a.age);
//     const ageDifference = people[0].age - people[people.length - 1].age;

//     console.log(ageDifference); 



// // 7
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers); 




// // 8
// const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6, 6];

// const uniqueNumbers = numbers.reduce((unique, number) => {
//   if (!unique.includes(number)) {
//     unique.push(number);
//   }
//   return unique;
// }, []);

// console.log(uniqueNumbers); 



// // 9
// const products = [
//     { id: 1, name: 'Product A', price: 10, rating: 4.5, discount: 0.1 },
//     { id: 2, name: 'Product B', price: 20, rating: 3.8, discount: 0.2 },
//     { id: 3, name: 'Product C', price: 15, rating: 4.2, discount: 0.05 },
//     { id: 4, name: 'Product D', price: 12, rating: 4.1, discount: 0.15 },
//   ];
  
//   products.sort((a, b) => {
//     if (a.price !== b.price) {
//       return a.price - b.price;
//     } else if (a.rating !== b.rating) {
//       return b.rating - a.rating;
//     } else if (a.discount !== b.discount) {
//       return b.discount - a.discount;
//     } else {
//       return a.id - b.id;
//     }
//   });
  
//   console.log(products);
  


// 10
// const products = [
//     { name: 'Product A', rating: 4.5 },
//     { name: 'Product B', rating: 4.3 },
//     { name: 'Product C', rating: 4.7 },
//     { name: 'Product D', rating: 4.1 },
//   ];
  
//   products.sort((a, b) => b.rating - a.rating);
  
//   const highestRatedProduct = products[0];
  
//   console.log(highestRatedProduct);

  

// // 11
// const products = [
//     { id: 1, name: 'Product A', price: 10 },
//     { id: 2, name: 'Product B', price: 20 },
//     { id: 3, name: 'Product C', price: 15 },
//     { id: 4, name: 'Product D', price: 12 },
//   ];
  
//   products.sort((a, b) => a.price - b.price);
  
//   const cheapestProduct = products[0];
  
//   console.log(cheapestProduct);
  


// // 12
// const products = [
//     { id: 1, name: 'Product A', price: 10 },
//     { id: 2, name: 'Product B', price: 20 },
//     { id: 3, name: 'Product C', price: 15 },
//     { id: 4, name: 'Product D', price: 12 },
//   ];
  
//   const totalPrices = products.reduce((sum, product) => sum + product.price, 0);
  
//   console.log(totalPrices); 



// // 13
// const products = [
//     { id: 1, name: 'Product A', price: 10 },
//     { id: 2, name: 'Product B', price: 20 },
//     { id: 3, name: 'Product C', price: 15 },
//     { id: 4, name: 'Product D', price: 12 },
//   ];
  
//   const productNames = products.map(product => product.name);
  
//   console.log(productNames);



// // 14
// const products = [
//     { id: 1, name: 'Product A' },
//     { id: 2, name: 'Product B' },
//     { id: 3, name: 'Product C' },
//     { id: 4, name: 'Product D' },
//   ];
  
//   function findProductById(id) {
//     const product = products.find(product => product.id === id);
//     return product ? product.name : null;
//   }
  
//   console.log(findProductById(5));



// // 15
// let products = [
//     {
//       id: 6,
//       name: "Smarthpone",
//       price: 12000,
//       rating: 4.5,
//       discount: 20,
//     },
//     {
//       id: 2,
//       name: "Acer",
//       price: 10000,
//       rating: 4.3,
//       discount: 10,
//     },
//     {
//       id: 1,
//       name: "Mac book",
//       price: 17000,
//       rating: 4.7,
//       discount: 40,
//     },
//     {
//       id: 4,
//       name: "HP",
//       price: 21000,
//       rating: 4.1,
//       discount: 30,
//     },
//     {
//       id: 5,
//       name: "Dell",
//       price: 35000,
//       rating: 4.9,
//       discount: 30,
//     },
//   ];
  
//   const updatedProducts = products.filter(product => product.id !== 4);
  
//   console.log(updatedProducts);




// 16
// const str = "Hello";

// const isOnlyLetters = str.split('').every(char => char.match(/[a-zA-Z]/));

// console.log(isOnlyLetters);



// // 17
// function getTruthyFalsy(arr) {
//     const truthy = arr.filter(Boolean);
//     const falsy = arr.filter(element => !element);
  
//     return { truthy, falsy };
//   }
  
//   const arr = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];
//   const result = getTruthyFalsy(arr);
  
//   console.log(result);



// // 18
// const str = "Men Abdulaziz Programmerman";
// const wordLengths = str.split(' ').map(word => word.length);

// console.log(wordLengths);



// 19
// const str = "Men Abdulaziz Programmerman";
// const hasEmptySpace = str.split(' ').some(word => word === '');

// console.log(hasEmptySpace);



// // 20
// const obj = {a: 2, b: 5, c: 7};
// const result = Object.entries(obj).map(([key, value]) => key + value);

// console.log(result);



// // 21
// function digitSum(number) {
//     if (number < 10) {
//       return number;
//     } else {
//       const lastDigit = number % 10;
//       const remainingDigits = Math.floor(number / 10);
//       return lastDigit + digitSum(remainingDigits);
//     }
//   }
  
//   console.log(digitSum(12345));
  


// // 22
// const pupils = [
//     {
//       name: "Elbek",
//       percent: 95,
//     },
//     {
//       name: "Zafar",
//       percent: 78,
//     },
//     {
//       name: "Aziz",
//       percent: 83,
//     },
//     {
//       name: "Jasur",
//       percent: 88,
//     },
//     {
//       name: "Bobur",
//       percent: 66,
//     },
//     {
//       name: "Kamron",
//       percent: 75,
//     },
//   ];
  
//   const averagePercent = pupils.reduce((total, pupil) => total + pupil.percent, 0) / pupils.length;
  
//   console.log(averagePercent);
  


// // 23
// const pupils = [
//     {
//       name: "Elbek",
//       percent: 95,
//     },
//     {
//       name: "Zafar",
//       percent: 78,
//     },
//     {
//       name: "Aziz",
//       percent: 83,
//     },
//     {
//       name: "Jasur",
//       percent: 88,
//     },
//     {
//       name: "Bobur",
//       percent: 66,
//     },
//     {
//       name: "Kamron",
//       percent: 75,
//     },
//   ];
  
//   const gradedPupils = pupils.map(pupil => {
//     let grade;
//     if (pupil.percent >= 90 && pupil.percent <= 100) {
//       grade = 5;
//     } else if (pupil.percent >= 80 && pupil.percent < 90) {
//       grade = 4;
//     } else if (pupil.percent >= 70 && pupil.percent < 80) {
//       grade = 3;
//     } else {
//       grade = 2;
//     }
//     return { ...pupil, grade };
//   });
  
//   console.log(gradedPupils);
  


// // 24
// const pupils = [
//     {
//       name: "Elbek",
//       percent: 95,
//     },
//     {
//       name: "Zafar",
//       percent: 78,
//     },
//     {
//       name: "Aziz",
//       percent: 83,
//     },
//     {
//       name: "Jasur",
//       percent: 88,
//     },
//     {
//       name: "Bobur",
//       percent: 66,
//     },
//     {
//         name: "Kamron",
//         percent: 75,
//       },
//     ];
    
//     const passedPupils = pupils.map(pupil => ({
//       ...pupil,
//       isPassed: pupil.percent >= 70
//     }));
    
//     console.log(passedPupils);

     

// // 25
// const pupils = [
//     {
//       name: "Elbek",
//       percent: 95,
//     },
//     {
//       name: "Zafar",
//       percent: 78,
//     },
//     {
//       name: "Aziz",
//       percent: 83,
//     },
//     {
//       name: "Jasur",
//       percent: 88,
//     },
//     {
//       name: "Bobur",
//       percent: 66,
//     },
//     {
//       name: "Kamron",
//       percent: 75,
//     },
//   ];
  
//   const examResults = pupils.reduce((result, pupil) => {
//     if (pupil.percent >= 70) {
//       result.passed++;
//     } else {
//       result.failed++;
//     }
//     return result;
//   }, { passed: 0, failed: 0 });
  
//   console.log(examResults);
  