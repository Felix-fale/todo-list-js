// SELECTEURS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// ECOUTEURS
todoButton.addEventListener("click", addTodo); // 1-boutton ajout
todoList.addEventListener("click", deleteChek); // 2-boutton suppression
filterOption.addEventListener("input", filterTodo);

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

  //   ========= remettre a zero l'input apres un nouvel ajout ======
  todoInput.value = "";
}

// === DEUXIEME FACON D4ECRIRE UNE FONCTION; utilisation de (EVENT = e)===

// const deleteChek = (event) => {
//     console.log('a');
// } // La fonction flechée ne marche pas dans ce cas, a chercher pour plus de comprehension

function deleteChek(event) {
  //   console.log(event.target); // on arrive selectionner les deux button liées a todoList

  const item = event.target;
  //   delete todo ... (classList[0] === Pour selectionner une class enfant dans une class parent * EXEMPLE: dans ce cas nous avons selectionner 'completed-btn' dans ".todo-list ou plus precisement todo" )

  // if (item.classList[0] === "completed-btn") {
  //   item.remove();
  // } // Grace a cette condition on arrive a supprimer le boutton delete

  if (item.classList[0] === "trash-btn") {
    // item.parentElement.remove(); // Pour faire simple, on fait sa

    const todo = item.parentElement;
    todo.classList.add("fall");
    // todo.remove(); // La raison ... 41:39m
    todo.addEventListener("transitionend", function () {
      todo.remove();
    }); //Cette evenement va attendre la fin de l'ajout de la class fall avant de s'executer
  }

  // CHECK MARK
  if (item.classList[0] === "completed-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  // console.log(todos);
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else{
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
