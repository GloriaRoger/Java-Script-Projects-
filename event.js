//Creating the Function "Make Body" in order to callit in html for button "Click Me" in the body. 
function makeBody(color) {
    document.body.style.backgroundColor = color;
}

//Creating a variable that then can call a funtion by using var.onsomeaction = to the function to makeBody('color')
const btn = document.querySelector('#teal');

const h1 = document.querySelector('h1');
// btn.onclick = function() {
//     h1.style.color = 'cyan';
// };

//USE eventListener over inLine and setting events manually because they don't allow for multiple events to the same element whereas eventLister does
//adding event listener to an id. using variable violetbtn we are able to call the built in JS function addEventListener to hold ("event,  function () { make body ('color');)
const voiletBtn = document.querySelector('#violet');

voiletBtn.addEventListener('click', function() {
    makeBody('Violet');
});

voiletBtn.addEventListener('click', function() {
    h1.style.color = 'cyan';
});

btn.addEventListener('click', function() {
    makeBody('teal');
});