// SELECTEURS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// ECOUTEURS
todoButton.addEventListener("click", addTodo);

// FONCTIONS
function addTodo(e) {
  e.preventDefault();
  // console.log("hello");

  //   ============= Creer une Div avec une class todo ==============
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //   ============ creer un li avec une class todo-item ===========
  const newTodo = document.createElement("li");
//   newTodo.innerText = "hey";
  newTodo.innerText = todoInput.value; //pour recuperer la valeur saisie dans l'input
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //   ===========creer le bouton check =========
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("completed-btn");
  todoDiv.appendChild(completedButton);

  //   ===========creer le bouton supprimer =========
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //   ========== AJOUTER NOTRE TODO A TODO-LIST =====
  todoList.appendChild(todoDiv);

//   =========

}
