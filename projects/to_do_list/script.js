const toDo = document.querySelector(".toDo");
const div = document.querySelector(".div");
const main = document.querySelector(".main");
const addButton = document.querySelector(".addButton");

let toDoItem = null;
let isWriting = false;

function addToDoHandler() {
  if (toDo.value.trim() !== "") {
    //parent div
    const row = document.createElement("div");
    main.appendChild(row);
    row.classList.add("toDoItems");
    const text = document.createElement("span");
    row.appendChild(text);
    text.innerText = toDoItem;

    //children

    //remove
    const deleteIcon = document.createElement("div");
    row.appendChild(deleteIcon);
    deleteIcon.classList.add("deleteIcon");

    deleteIcon.addEventListener("click", () => {
      row.remove();
    });

    //line-through
    const crossToDo = document.createElement("div");
    row.appendChild(crossToDo);
    crossToDo.classList.add("crossToDo");

    crossToDo.addEventListener("click", () => {
      text.classList.toggle("active");
    });
  }
}

addButton.addEventListener("click", () => {
  addToDoHandler();
  toDo.value = "";
});

toDo.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addToDoHandler();
    toDo.value = "";
  }
});

toDo.addEventListener("input", (e) => {
  toDoItem = e.target.value;
});
