//  For Loops 

//  i want to run a loop 10 times, i want to starts at 60 and run until 70. 
//   10 Total Times
//   50 initial value 
//   60 when to run the loop 
//   +1 how to change value each time 

for( let i = 1; i<= 10; i++) {
    console.log('hello:', i)
}

// 1 1x1
// 4 2x2
// 9 3x3
// 16 4x4
// 25 5x5
// 36 6x6
// 49 7x7

for(let num = 1; num <= 20; num++) {
    console.log(`${num}x${num} = ${num * num}`);

}

const myStudents = [
    {
        firstName : 'Gloria',
        grade : 98
},
    {
        firstName : 'Steve',
        grade : 76
},
    {
        firstName : 'Sheri',
        grade : 45
},
];
// Finding te average, total has to be placed outside of the looping order notto keep looping a tottal of zero 
let total =0
for (let i = 0; i < myStudents.length; i++){
        let student = myStudents[i];
        total += student.grade;            
    }
    console.log(total/myStudents.length);

// This shows how to string two peices of info tgether by objects in a  loop 
// for (let i = 0; i < myStudents.length; i++){
//     let student = myStudents[i];
//     console.log(` ${student.firstName} scored ${student.grade}`)
// };

const word = 'stressed';
// let reversedWord = "";
for(let i = word.length -1; i >=0; i--) {
// reversedWord += word[i];

console.log(word[i]);
}


// for(let i = 1; i <= 10; i++) {
//     console.log('OUTER LOOP:', i);

// }

//RECREATING A FOR LOOP WITH A WHILE  LOOP
for (let i =0; i<=5; i++) {
    console.log(i);
}

let j = 0;
while(j <=5) {
    console.log(j);
    j++;
}

//MORE WHILE LOOPS
//while(some condition)
//inthe loop, update or attempt to make that condition false

const target = Math.floor(Math.random() * 10 );
let guess = Math.floor(Math.random() * 10 );
while(guess != target) {
    console.log(`Target: ${target} Guess: ${guess}`);
    // you have to re-enter the variable guess otherwise it will only guess once outside of the loop and not each time the loop runs
    guess = Math.floor(Math.random() * 10 );
}
console.log(`Target: ${target} Guess: ${guess}`);

//using breaks in a while loop


const targett = Math.floor(Math.random() * 10 );
let guesss = Math.floor(Math.random() * 10 );
//careful while(true) creates an infinite loop
while(true) {
    //we break the infinite loop by saying break if its true
    if(targett === guesss) break;
    //otherise run this loop below
    console.log(`Targett: ${target} Guesss: ${guesss}`);
    guesss = Math.floor(Math.random() * 10 );
}
// if targett === guesss, run this code
console.log(`Targett: ${targett} Guesss: ${guesss}`);
console.log("Congrats!");

// For Loops
let subreddits = ['soccer', 'popheads', 'cringe', 'books'];
for(let i =0; i < subreddits.length; i++){
console.log(subreddits[i]);
}

//alternative is for of loops, yu can iterate over each element ina string, each element in an array without need for index numbers  

for(let sub of subreddits){
    console.log(sub);
}
// example of for of loop on just a string 
for(let char of "Buildings") {
console.log(char.toUpperCase());
}



//for loop vs for of loop 

//for loop 
//const magicSquare = [
   // [2,7,6],[9,5,1],[4,3,8]


//     for(let i =0; i < magicSquare.length; i++) {
//         let row =magicSquare[i];
//         let sum = 0;
//         for(let j = 0; j < row.length; j++) {
//          sum += row[j];
//     }
//     console.log(`${row} summed to ${sum}`);
// }


// for of loop 

const magicSquare = [
    [2,7,6],[9,5,1],[4,3,8]
];
for(let row of magicSquare) {
    let sum = 0;
    for(let num of row) {
        sum += num;
    }
console.log(`${row} summed to ${sum}`);
}


// here is a situation whre a for loop works best 
 const words1 = [ 'mail', 'milk', 'bath', 'black'];
 const words2 = [ 'box', 'shake', 'tub', 'Berry'];
  
 for (let k = 0; k < words1.length; k++) {

    console.log(`${words1[k]}${words2[k]}`);
  }



   //the key to pull form an object is Object.keys or Object.values
    //you nCAN NOT use a For or For or loop with objects and its makes the whole this a string
    

  const movieReview = {
    Arrival : 9.5,
    Alien : 9,
    Amelie : 8,
    'In Bruges' : 9,
    Amadeus : 10,
    'Kill Bill' : 8,
    'Little Miss Sunshine' : 8.5,
    Coraline : 7.5 };

   for(let movie of Object.keys(movieReview)) {
    console.log(movie, movieReview[movie]);
   }
  // this shows how I would avg the rathings of the movies
const ratings = Object.values(movieReview);
let T = 0;
for (let r of ratings) {
    T += r;
}
let avg = T / ratings.length;
console.log(avg);

//LOOPS PRACTICE PROBLEMS
//1 numbers up to 10
for( let g = 0; g <= 10; g ++) {
    console.log(g);
}
//2 numbers up to 10
let h = 0;
while(h <= 10) {
    console.log(h);
    h ++;
}
//3 even number 0 to 20

for(let sec = 0; sec <= 20; sec+=2) {
    console.log(sec);
}
//4 while loop to console.og all odd numbers from 0 to 20 
let d = 1;
while(d <=20) {
       console.log(d);
       d+=2;
    }

//5 for loop console.log all numbers from 10 to zero
for( let v = 10; v >= 0; v --) {
    console.log(v);
}