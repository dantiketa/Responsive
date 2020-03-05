//Nav bar menu function:
function menu(){
let button = document.querySelector("#icon");
let div = document.querySelector("#menu-options");
let header = document.querySelector(".page-header");


button.addEventListener("click", function(){
  if(div.style.display == "none")  {div.style.display = "flex"; 
  div.style.flexWrap = "wrap";
  div.style.justifyContent = "space-around";
  header.style.marginTop = "4.9rem";
} else {div.style.display = "none"
header.style.marginTop = "2.53rem"}
})
}

menu();