

rows = document.querySelectorAll("td");


for(var i = 0; i < rows.length; i++ ) {

  rows[i].addEventListener("click", nextImg(i), false);

}

function nextImg(whatIsNow){

  return function(){
    var whatIsNows = rows[whatIsNow];
    if(whatIsNows.textContent === "")
      whatIsNows.textContent = "X";
    else if(whatIsNows.textContent === "X")
      whatIsNows.textContent = "O";
    else
    whatIsNows.textContent = "";
  }

}



restart = document.querySelector("#restart").addEventListener("click", function(){
  for(var i = 0; i < rows.length; i++ ) {
    rows[i].textContent = "";
  }
});
