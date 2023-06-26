document.addEventListener("DOMContentLoaded", function() {
    let toDo = document.getElementById("toDo");
    let toDoList = document.getElementById("toDoList");
  
    toDo.addEventListener("submit", function(e) {
      e.preventDefault();
  
      let removeButton = document.createElement("button");
      removeButton.innerText = "Remove";

      let addToDo = document.createElement("li");
      addToDo.innerText = document.getElementById("addToDo").value;

      toDoList.appendChild(addToDo);
      addToDo.appendChild(removeButton);
  
      toDo.reset();
    });

    // removeButton.addEventListener("click", function(e) {
    //   e.target.parentNode.remove();
    // });

    // addToDo.addEventListener("click", function(e) {
    //   e.target.style.textDecoration = "line-through";
    // });
  
    
     
      // a bad attemp at the lower solution
  
  //     toDoList.addEventListener("click", function(e) {
  //         if (addToDo === "li") {
  //         e.target.style.textDecoration = "line-through";
  //       } else if (targetTagToLowerCase === "button") {
  //         e.target.parentNode.remove();
  //       }
  //     });
  //   });
  
      toDoList.addEventListener("click", function(event) {
        const targetTagToLowerCase = event.target.tagName.toLowerCase();
        if (targetTagToLowerCase === "li") {
          event.target.style.textDecoration = "line-through";
        } else if (targetTagToLowerCase === "button") {
          event.target.parentNode.remove();
        }
      });
    });
  