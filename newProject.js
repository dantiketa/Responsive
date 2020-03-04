//Nav bar menu function:
function menu(){
let button = document.querySelector("#icon");
let div = document.querySelector("#menu-options");

button.addEventListener("click", function(){
  if(div.style.display == "none")  {div.style.display = "block";
} else {div.style.display = "none"}
})
}

menu();