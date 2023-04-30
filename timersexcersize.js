//Coundown function 
function countDown(num) {
    let timer = setInterval(function() {
        num--;
        if(num <= 0) {
            clearInterval(timer);
            console.log('DONE');
        }
        else {
            console.log(num);
        }
    } , 1000)
}


function randomGame() {
    let num;
    let counter = 0;
    let int = setInterval(function() {
        num = Math.random();
        counter++;
        if (num > .75) {
            clearInterval(int);
            console.log("It Took" + counter + " try/tries");
        }
    } , 1000)
}
