// let createBtn = document.querySelector("#create")
// let content = document.querySelector("#content")
// let input = document.querySelector("#textInput")


// let titleDiv = document.createElement("div");


// let parentDiv = document.createElement("div");
// parentDiv.classList = 'parent';
// parentDiv.setAttribute("id" ,"card--1")

// let button = document.createElement("button");
// button.setAttribute("id", "delete--1")

// let deleteCard = button

// input.addEventListener('keyup', (event) => {
//     titleDiv.textContent = event.target.value;
// }
// )

// createBtn.addEventListener("click", () => {
//     content.appendChild(parentDiv)
//     parentDiv.appendChild(titleDiv)
//     parentDiv.appendChild(button)
//     button.innerHTML = "Delete me";
//     input.disabled = true;
// })


// button.addEventListener("click", () => {
//     parentDiv.remove()
//     input.disabled = false;
// })

let count = 0;

function factory() {
    count += 1;
    const createElement = document.createElement("section");
    createElement.id = `card--${count}`
    
    const textbox = document.querySelector(".input").value;
    
    createElement.className = "border";
    createElement.classList.add(`card--${count}`)
    createElement.innerHTML = `<h3>${textbox}</h3><button id="delete--${count}" class="">Delete This Card</button>`;
    
    document.querySelector(".card").appendChild(createElement);

    document.querySelector(`#delete--${count}`).addEventListener("click", function (event) {
        if (event.target.id.split("--")[1] === createElement.id.split("--")[1]) {
            createElement.remove();
        } else {
            alert("You suck");
        }
    }
    )
}

const createButton = document.querySelector('.create');
createButton.addEventListener("click", factory)
