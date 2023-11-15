// Part 1 Complete

// function makeCounter(startFrom = 0, incrementBy = 1) {
//     let currentCount = 0;

//     return function() {
//         // currentCount++;
//         let currentCount = startFrom;
//         return function () {
//         currentCount += incrementBy;
//         console.log(currentCount)
//         return currentCount;
//     }
//     };
// }
// function makeCounter(){
//     let currentCount2 = 0;

//     return function() {
//         currentCount2++;
//         console.log(currentCount2)
//     };
// }

// let counter1 = makeCounter(undefined, 2);
// let counter2 = makeCounter();

// counter1(); // 2
// counter1(); // 4
// counter2(); // 1
// counter2(); // 2


// Part 2 Complete

// function delayMsg(msg){
//     console.log(`This message will be printed after a delay: ${msg}`)
// }

// setTimeout(delayMsg, 100, '#1: Delayed by 100ms'); // Fourth
// setTimeout(delayMsg, 20, '#1: Delayed by 20ms'); // Third
// setTimeout(delayMsg, 0, '#1: Delayed by 0ms'); // Second
// // delayMsg('#4: Not delayed at all') // First
// delayMsg ( () => '#4: Not delayed at all')
// setTimeout(delayMsg, 10000, '#5: Delayed after 10 seconds')

// let canceledTimerId = setTimeout(delayMsg, 10000, '#5: Delayed after 10 seconds')
// clearTimeout(canceledTimerId);

// console.log(canceledTimerId)


// Part 3

// function debounce(func, timeout) {
//     let timeoutId;
  
//     return function (...args) {
//       clearTimeout(timeoutId);
//       timeoutId = setTimeout(() => {
//         func.apply(this, args);
//       }, timeout);
//     };
//   }

// function printMe(msg) {
//     console.log(`Printing debounced message: ${msg}`);
// }

// printMe = debounce(printMe, 1000);

// setTimeout(() => printMe('First'), 100);
// setTimeout(() => printMe('Second'), 200);
// setTimeout(() => printMe('Third'), 300);

// Part 4 Complete

// function printFibonacci(limit) {
//     let a = 0;
//     let b = 1;
//     let count = 0;
  
//     const intervalId = setInterval(() => {
//       console.log(a);
  
//       const nextFibonacci = a + b;
//       a = b;
//       b = nextFibonacci;
  
//       count++;
  
//       if (count === limit) {
//         clearInterval(intervalId);
//       }
//     }, 1000);
//   }
  

//   printFibonacci(10);

// Part 5 Complete

// let car = {
//     make: "porsche",
//     model: '911',
//     year: 1964,

//     description() {
//         console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
//     }
// };


// car.description();
// setTimeout(car.description, 200); 

// let car2002 = {...car, year: 2002}
// car2002.description();

// setTimeout(car.description.bind(car), 300);

// let carNissan = {...car, make: 'Nissan'};
// carNissan.description();
// setTimeout(car.description.bind(car), 400);




// Part 6 Complete

// function multiply(a, b, c = 1, d = 1) {
//     console.log(a * b * c * d);
//   }
//   Function.prototype.delay = function (time, ...params) {
//     setTimeout(() => this(...params), time);
//   };
// //   multiply.delay(500,5, 5, 2, 20);
// //   printFibonacci.delay(500, 9)

//   Function.prototype.delay = function(ms) {
//     let func = this;
//     return function(...args) {
//         setTimeout(() => func.apply(null, args), ms)
//     }
//   }

//   function multiply(a, b, c, d) {  
//     console.log(a * b * c * d)
// }

// multiply.delay(1000)(2, 4, 6, 8)


// Part 7 Complete

// Person.prototype.toString = function() {
//     return `${this.name}, is ${this.age}, years old, ${this.gender}`
// }

// const person2 = ('Billy Daves', '67', 'male')

// const person3 = ('Patty Willis', '22', 'female')

// console.log('person2: '+person2)

// function Person(name, age, gender){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }

// const person1 = new Person('James Brown', 73, 'male')
// console.log('person1: '+person1) //prints person1: [object Object]

// function Student(name, age, gender, cohort) {
//     Person.call(this, name, age, gender);
//     this.cohort = cohort;
//     Object.prototype.toString = function () {
//       return `I'm ${this.name}, a ${this.age} old ${this.gender}, and I'm in cohort ${this.cohort}`;
//     };
//   }
//   let student1 = new Student("Tommy", 49, "male", 420);
//   let student2 = new Student("Ricky", 15, "male", 420);
  

// Part 8 Complete

// class DigitalClock {
//     constructor(prefix) {
//       this.prefix = prefix;
//     }
//     display() {
//       let date = new Date();
//       let [hours, mins, secs] = [
//         date.getHours(),
//         date.getMinutes(),
//         date.getSeconds(),
//       ];
//       if (hours < 10) hours = "0" + hours;
//       if (mins < 10) mins = "0" + mins;
//       if (secs < 10) secs = "0" + secs;
//       console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
//     }
//     stop() {
//       clearInterval(this.timer);
//     }
//     start() {
//       this.display();
//       this.timer = setInterval(() => this.display(), 1000);
//     }
//   }

//   class PrecisionClock extends DigitalClock {
//     constructor(prefix, precision = 1000) {
//       super(prefix);
//       this.precision = precision;
//     }
//     start() {
//       this.display();
//       this.timer = setInterval(() => this.display(), this.precision);
//     }
//   }
//    const preciseClock = new PrecisionClock('Precise Clock: ', 500);
//    preciseClock.start(); 

//    class AlarmClock extends DigitalClock {
//     constructor(prefix, wakeupTime = '07:00') {
//         super(prefix);
//         this.wakeupTime = wakeupTime;
//     }
// display() {
// super.display();
// let date = new Date();
// let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()]
// .map(num => num < 10 ? '0' + num : num.toString());
// let currentTime = `${hours}:${mins}` + (this.wakeupTime.length === 5 ? '' : `:${secs}`);
// if (currentTime === this.wakeupTime) {
//     console.log('Wake Up!');
//     this.stop();
// }
// }
//    }

//    const alarmClock = new AlarmClock('Alarm Clock: ', "16:13")
// alarmClock.start()


// Part 9 Complete

// function randomDelay() {
//    let delay = Math.floor(Math.random() * 20 * 1e3);
//    return new Promise(function (resolve, reject){
//     setTimeout(
//         () => (delay % 2 === 0 ? resolve(delay) : reject(new Error(delay))),
//         delay
//     );
//    });
// }

// randomDelay().then(() => console.log('There appears to have been a delay'));


// Part 10 Complete

import fetch from 'node-fetch'
globalThis.fetch = fetch

function fetchURLData(url){
    let fetchPromise = fetch(url).then(response => {
        if(response.status === 200) {
            return response.json();
        } else {
            throw new Error(`Request failed with status ${repsonse.status}`);
        }
    });
    return fetchPromise;
}

fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
.then(data => console.log(data))
.catch(error => console.error(error.message));

async function newFetchURLData(url) {
    let fetchPromise = await fetch(url).then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error(`Request failed with status ${response.status}`);
      }
    });
    return fetchPromise;
  }
  newFetchURLData("https://jsonplaceholder.typicode.com/todos/201") // There are two hundred todos on JSON Placeholders, so this should fail
    .then((data) => console.log(data))
    .catch((error) => console.error(error.message + " 'new'"));
  fetchURLData("https://jsonplaceholder.typicode.com/todos/201") // There are two hundred todos on JSON Placeholders, so this should fail
    .then((data) => console.log(data))
    .catch((error) => console.error(error.message + " original"));