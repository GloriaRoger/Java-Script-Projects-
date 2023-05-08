//funtion to roll die #1-#6
function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled ${roll}`);
}
// Roll dice a number of times called "throwDice"
function throwDice(numRolls) {
    for (let i = 0; i<numRolls; i++) {
        rollDie();
    }
    //you don't need to console.log anything because you are calling the function "rollDie"
}
// function to call a ncikname and console.log "hi nickname"
function greet(nickname) {
    console.log(`Hi ${nickname}!`);
}

function square(num) {
    console.log(num * num);
}

function sum(x,y) {
    return x + y;

}

function divide(a,b) {
    return a / a;

}

// you can return only one value, if you need to returnmore valuse you can so it inan array or a string only. 


function isValidPassword(username, password) {
    if(password.length < 8) || (password.indexOf(' ') !== -1) || (password.indexOf(username) !== -1) {
        return false;
     }
     return true;
    }
 

function isPurple(color) {
    if (color.toLowerCase() === 'purple') {
    return true;
    }
    else { 
        return false;
    }
}

// you can remove else entirely because return stops the function

// function isPurple(color) {
//     if (color.toLowerCase() === 'purple') {
//     return true;
//     }
//     return false;
//    }

   // even more simplifed below because === is a boolean that rturns true or false
//    function isPurple(color) {
//     if (color.toLowerCase() === 'purple') 
//     }

    // how a reurnw ill stop a function no matter where placed 
    // function containsPurple(arr) {
    //     for (let color of arr){
    //     if(color === 'purple' || color === 'magenta') {
    //         return true;
    //     }
    //  }
    //      return false;
    // }

    //PRACTICE 
    // function isValidPassword(username, password) {
    //     if(password.length < 8) || (password.indexOf(' ') !== -1) || (password.indexOf(username) !== -1) {
    //         return false;
    //      }
    //      return true;
    //     }
    
// rewriten from above 
     function isValidPassword(password, username) {
        const tooShort = password.length < 8; 
        const hasSpace = password.indexOf(' ') !== -1;  
        const tooSimilar = password.indexOf(username) !== -1;
        if (tooShort || hasSpace || tooSimilar) return false;
        return true;
     }
// you could also say 
 // if (!tooShort && !hasSpace && tooSimilar) return true; }

 // you could also remove the if and just return !tooShort && !hasSpace && tooSimilar; } -- since this is a boolean

 function avg(arr) {
    //loop over each num 
 let Total = 0;
 for( let num of arr) {
    //add them together 
    Total += num;
 }
 //and divide by number of nums
 return Total / arr.length;
}

  // isPangram('The five boxing wizrds jump quickly')
  // true
  // isPangram('the five boxing wizards jump quick')
  // false

  function isPangram(sentence) {
    let lowerCased = sentence.toLowerCase();
    for(let char of 'abcdefghijklmnopqrstuvwxyz') {
        if(lowerCased.indexof[char] === -1) {
            return false;
        }
    }
        return true;
    }
  // rewritten with includes instead of includes 

  
  function isPangram(sentence) {
    let lowerCased = sentence.toLowerCase();
    for(let char of 'abcdefghijklmnopqrstuvwxyz') {
        if(!lowerCased.includes[char]) {
            return false;
        }
    }
        return true;
    }



    // write a getCard() finction which returns a random playing card object, like:
    // {
        //Value : 'K'
        // suite: 'clubs'
        //    }
        // pick a random value from :
        //-----2,3,4,5,6,7,8,9,10,J,Q,K,A
        //pick a random suit from:
        //----- clubs, spades,hearts, diamonds
        //return both in an object

        function getCard() {
            const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
            const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
            const valIdx = Math.floor(math.random() * value.length);
            const value = values[valIdx];
            const suitIdx = Math.floor(math.random() * suits.length); 
            const suit = suits[suitIdx];
            return { value: value, suit: suit};
                 
        }

        //re-written 
        //using just one function called pick  to pick a random element from an array

        function pick(arr){
            Math.floor(Math.random() * arr.length);
            return arr[idx];
        }

        function getCard() {
            const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
            const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
            const value = pick(values);
            const suit = pick(suits);
            return { value: value, suit: suit};
        }
        // rewritten even shorter 

        function getCard() {
            const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
            const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
            return { value: pick(values), suit: pick(suits)};
        }
            // write a function that  takes in two parameters and returns the difference of the two;
            function difference(a,b) {
                return a-b;
            }
            // this function takes in two parameters and returns the product of the two;
            function product(a,b) {
                return a*b;
            }
            //this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;

     function printDay(num) {
        let days = {1:'sunday', 2:'monday', 3:'tuesday', 4:'wednesday', 5: 'thursday', 6: 'friday', 'saturday'};
        return days[num]
        }
        
//this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.

    function lastElement(arr) {
        return arr[arr.length-1];
    }
// DID NOT DO THESE BUT COPIED SOLUTIONS 
    function numberCompare(a,b){
        if(a === b){
          return 'Numbers are equal';
        } else if(a > b){
          return 'First is greater';
        }
        return 'Second is greater';
      }
      
      function singleLetterCount(str1, letter){
        let finalCount = 0;
        for(let i=0; i< str1.length; i++){
          if(str1[i].toLowerCase() === letter.toLowerCase()){
            finalCount++;
          }
        }
        return finalCount;
      }
      
      function multipleLetterCount(str){
        str = str.toLowerCase();
        let finalObj = {};
        for(let i =0; i< str.length; i++){
          if (finalObj[str[i]] === undefined){
            finalObj[str[i]] = 1;
          } else {
            finalObj[str[i]]++;
          }
        }
        return finalObj;
      }
      
      function arrayManipulation(arr, command, position, val){
        if(command === 'remove'){
          if(position === 'end'){
            return arr.pop();
          }
            return arr.shift();
        }
        else if(command === 'add'){
          if(position === 'end'){
            arr.push(val)
            return arr;
          }
          arr.unshift(val)
          return arr;
        }
      }
      
      function isPalindrome(str){
        return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
      
        // for(let i =0; i<str.length/2; i++){
        //   if(str[i].toLowerCase() !== str[str.length-1-i].toLowerCase()){
        //     return false;
        //   }
        // }
        // return true;
      }
      
      function RPS(){
      
        function determineComputer(num){
          if(num <= .33) return "rock";
          else if(num <= .66) return "paper";
          return "scissor";
        }
      
        let userChoice = prompt("Choose rock / paper or scissor").toLowerCase();
        let computerChoice = determineComputer(Math.random());
      
      
        let answers = ["rock", "paper", "scissor"];
      
        if(!userChoice || answers.indexOf(userChoice) === -1){
          return "Please select a valid option";
        }
      
        if(userChoice === computerChoice) return "Tie!";
      
        if(userChoice === "rock" && computerChoice === "paper") {
          return "You lose, computer picked " +  computerChoice;
        }
        if(userChoice === "paper" && computerChoice === "scissor") {
          return "You lose, computer picked " +  computerChoice;
        }
        if(userChoice === "scissor" && computerChoice === "rock") {
          return "You lose, computer picked " +  computerChoice;
        }
      
        return "You win! Computer picked " +  computerChoice;
      }
      //contains every vowel 
      
      function containsEveryVowel(str) {
        const vowles = ['a','e','i','o','u'];
            for(let i = 0; i < vowles.length; i++) {
                if (str.indexOf(vowles[i])< 0) {
                return false;
            }
            }
            
     return true;
    }
    //* Complete the 'onlyEvens' function below.
//  *
//     * The function is expected to return an INTEGER_ARRAY.
//     * The function accepts INTEGER_ARRAY arr as parameter.
//     */
   
   function onlyEvens(arr) {
       let evens = [];
       for(let i = 0; i < arr.length; i++){
           if(arr[i] % 2 === 0){
               evens.push(arr[i]); 
   }
       }
    return evens;
    }
    
    let array = [1,2,3,4,5,];
    console.log(onlyEvens(array));
//to remove only numbers froma string and keep the spaces 
    // var.replace(/[^0-9]+/g, '');  

function removeNumbers(str) {
      let newStr =str.replace(/[0-9]/g,'');
      
  return newStr;
  }

  function vowelFrequency(str) {
    let vowels ='aeiou';
    let count = {};
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            if (count[str[i]]) {
                count[str[i]]++;                       
            } else {
                count[str[i]] = 1;
            }
        }
        }
    
    for (let i =0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            result += str[i] + count[str[i]];
        }
    }
    return result;
 }