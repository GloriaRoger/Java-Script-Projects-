//1. Select the section with an id of container without using querySelector.
const container = document.getElementsById('container');
//2. Select the section with an id of container using querySelector.
const containers = document.querySelector('#container');
//3. Select all of the list items with a class of “second”.
const second = document.getElementsByClassName('second');
//4. Select a list item with a class of third, but only the list item inside of the ol tag.
const third = document.querySelector('ol.third');
//5. Give the section with an id of container the text “Hello!”.
const container = document.getElementsById('container');
container.innerText = "Hello!";
//6. Add the class main to the div with a class of footer.
const footer = document.getElementsByClassName('footer');
footer.className +="main";
//7. Remove the class main on the div with a class of footer.
const footer = document.getElementsByClassName('footer');
footer.classList.remove('main');
//8. Create a new li element.
let newLi = document.createElement('li');
//9. Give the li the text "four".
newLi.innerText = "four"
//10. Append the li to the ul element.
const unordered = document.querySelector('ul');
unordered.appendChild(newLi);
//11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
let liInsideOl = document.querySelectorAll('ol li');
for (let i = 0; i < liInsideOl.length; i++) {
    liInsideOl[i].getElementsByClassName.backgroundColor= 'green';
}
//12. Remove the div witha class of footer. 
const footer = document.getElementsByClassName('footer');
footer.remove();
