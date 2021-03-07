// Greet Users (Prompt function) First

const userName = prompt(`What's your name buddy?`);
const userId = document.querySelector("header h1 #userId");
userId.innerText = `Okay ${userName}, `;

// Selectors
const button = document.querySelector("form .todo-submit");
const todoList = document.querySelector(".todo-list");
const todoInput = document.querySelector(".todo-input");
const filterTodo = document.querySelector(".filter-todo");
const greetUser = document.querySelector(".greeting");

// for the disclaimer

const theDay = new Date();
const theHours = theDay.getHours();

let greet;


// Event Listeners

button.addEventListener("click", appStart);
todoList.addEventListener("click", deleteCheck);
filterTodo.addEventListener("click", filterNow);

// Functions

function appStart(e) {
   e.preventDefault(); // Prevent form refresh and submission


     // to create (DIV) element
   const todoDiv = document.createElement("div"); 
   todoDiv.classList.add("todo-container"); //add class "todo" to the div


   // create (li) element inside the DIV
   const newTodo = document.createElement("li"); 
   newTodo.classList.add('todo-lists'); // add class to the li

   newTodo.innerText = todoInput.value;

  todoDiv.appendChild(newTodo); // put the LI element in the new DIV

   // Creating the Todo list CHECKED button
  const checkBtn = document.createElement("button"); 
   checkBtn.classList.add('check-button');
   checkBtn.innerHTML = `<i class="fas fa-check"></i>`;


   // container for buttons 
   const todoButtons = document.createElement("div");
   todoButtons.classList.add('todo-buttons');
   todoButtons.appendChild(checkBtn);

   // Creating the Todo list DELETE buttons
  const deleteBtn = document.createElement("button"); 
   deleteBtn.classList.add('delete-button');
   deleteBtn.innerHTML = `<i class="far fa-trash-alt"></i>`;

   todoButtons.appendChild(deleteBtn);
  
   //  put the checked button in the div


  todoDiv.appendChild(todoButtons);
   
    
    // PUT Everything (the DIV) in the Todo UL class

    todoList.appendChild(todoDiv);

    // Clear todo Input value after submission
  
   todoInput.value = "";

}

// Delete Check on click function

function deleteCheck(e) {
   const item = e.target;

   // Now delete it

   if (item.classList.contains("delete-button")) {
     const deleteList = item.parentElement.parentElement;
        deleteList.classList.add("fade-down");
           
           // Delete but wait until the transition element 
           // completed
      deleteList.addEventListener('transitionend', function() {
             deleteList.remove();
      });

   }

   // Now Mark it

   if (item.classList.contains("check-button")) {
     const checkList = item.parentElement.parentElement;
     checkList.classList.toggle("done");
   }
}

// Filter 

function filterNow(event) {
  const todoItems = todoList.childNodes;

  todoItems.forEach(function(todoItem) {
    switch (event.target.value) {
      case "all":
      todoItem.style.display = "flex";
      break;
     
     case "done":
     if (todoItem.classList.contains("done")) {
       todoItem.style.display = "flex";
     } else {
       todoItem.style.display = "none";
     }

     break;


  case "undone":
  if (!todoItem.classList.contains("done")){
    todoItem.style.display = "flex";
  } else {
    todoItem.style.display = "none";
  }
  break;

    }
  });
 
}
 
// greeting

  if (theHours < 12) {
        greet = 'Good Morning'; 
    }
    else if (theHours >= 12 && theHours <= 17) {
        greet = 'Good Afternoon'; }
    else if (theHours >= 17 && theHours <= 24) {
        greet = 'Good Evening';
    }

 greetUser.innerText = greet + " " +  `${userName} ✋,`;

    