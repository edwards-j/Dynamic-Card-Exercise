let createBtn = document.querySelector("#create")
let content = document.querySelector("#content")
let input = document.querySelector("#textInput")


let titleDiv = document.createElement("div");


let parentDiv = document.createElement("div");
parentDiv.classList = 'parent';
parentDiv.setAttribute("id" ,"card--1")

let button = document.createElement("button");
button.setAttribute("id", "delete--1")

let deleteCard = button

input.addEventListener('keyup', (event) => {
    titleDiv.textContent = event.target.value;
}
)

createBtn.addEventListener("click", () => {
    content.appendChild(parentDiv)
    parentDiv.appendChild(titleDiv)
    parentDiv.appendChild(button)
    button.innerHTML = "Delete me";
    input.disabled = true;
})


button.addEventListener("click", () => {
    parentDiv.remove()
    input.disabled = false;
})

