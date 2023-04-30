// greet and diss functions with a console.log nessage 
function greet() {
    console.log("Hi!! I Love You!")
}
function diss() {
    console.log("you are the worst")
}
// function to repeat 3 times
function repeatThreeTimes(func) {
    func();
    func();
    func();
}
// function to repeat x times
function repeat(num, func) {
    for(let i = 0; i < num; i++) {
        func()
    }
}

let funcs =[greet, diss]

const myFunc = function add(x,y) {
    return x + y;
    }
    
    //returning functions as values in other functions

    function giveBirth() {
        console.log("GIVING BIRTH!!!")
        return function cry() {
            return "WAAAAAHHHH"
                    }
        }

        function makeMultiplyFunc(num) {
            return function mult(x) {
                return num * x;
            }
        }
    
