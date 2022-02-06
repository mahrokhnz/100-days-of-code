const toDo = document.querySelector(".toDo");
const div = document.querySelector(".div");
const main = document.querySelector(".main");
const addButton = document.querySelector(".addButton");

function addToDoHandler() {
  //parent div
  const row = document.createElement("div");
  document.body.appendChild(row);
  main.appendChild(row);
  row.classList.add("toDoItems");

  //childs
  const deleteIcon = document.createElement("div");
  document.body.appendChild(deleteIcon);
  row.appendChild(deleteIcon);
  deleteIcon.classList.add("deleteIcon");

  deleteIcon.addEventListener("click", () => {
    row.remove();
  });
}

addButton.addEventListener("click", () => {
  addToDoHandler();
});
