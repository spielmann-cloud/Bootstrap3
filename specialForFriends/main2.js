
var cells = document.querySelectorAll("td");

function show(){
  if(this.children.length === 0){
    this.innerHTML = "<img src=\"rick.jpg\" alt=\"Fuck you anyway\">";
  }
}

for(i=0; i < cells.length; i++) {
   cells[i].addEventListener("click", show, false);
}

var restart = document.getElementById("restart");
restart.addEventListener("click", function() {
  for(i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
});
