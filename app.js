let input = document.querySelector("input");
let a = document.querySelector("a");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {

    let newTask = document.createElement("li");
    let anchorElement = document.createElement("a");

    anchorElement.className = "btn btn-danger float-right";
    anchorElement.innerText = "X";

    newTask.className = "list-group-item d-flex justify-content-between align-items-start mt-3 ";
    
    newTask.style.border = "2px solid black";
    newTask.style.width="300px";

    newTask.innerText = input.value;

    newTask.appendChild(anchorElement);
    ul.appendChild(newTask);

    input.value = "";

});




let allList = document.getElementsByClassName("list-group mt-5");

for (let i = 0; i < allList.length; i++) {
    allList[0].addEventListener("click", function (e) {
        if(e.target.classList.contains("btn-danger")){
        ul.removeChild(e.target.parentElement);
        alert("well done:)");
        }
        

    });
}