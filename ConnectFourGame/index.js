
var first = prompt("Player One: Enter Your Name , you will be Blue");
var second = prompt("Player Two: Enter Your Name, you will be Red");
turn = $("#turn");
var whoIsNext = true;
arr = new Array(6);
for (var i1 = 0; i1 < 6; i1++) {
  arr[i1] = new Array(7);
  for(var i2 = 0; i2 < 7; i2++ ){
    arr[i1][i2] = 0;
  }
}


nextTurn();

buttons = $("button");

red = "rgb(255, 0, 0)";
blue = "rgb(0, 0, 255)";
gray = "rgb(128, 128, 128)";



for(i=0; i<buttons.length; i++) {
  buttons.eq(i).click(invokeMe(i));
}

function invokeMe(i) {
  return function(){
    //buttons.eq(i).css("background-color", "red");
    // var button = buttons.eq(i);
    // this.style.backgroundColor="red";
    // console.log(getComputedStyle(this).backgroundColor);
    color = whoIsNext ? blue : red;
    var changes = i;
    while(buttons.eq(changes).css("background-color") == gray && (changes < buttons.length)){
      changes+=7;
    }
    buttons.eq(changes - 7).css("background-color", color);
    arr[Math.floor((changes - 7) / 7)][(changes - 7) % 7] = whoIsNext ? "X" : "O";
    //check if won
    check();

    whoIsNext = whoIsNext ? false : true;


    nextTurn();
  }
}

function nextTurn() {
    next = whoIsNext ? first : second;
    nextColor = whoIsNext ? "blue" : "red";
    turn.text(next + " it is your turn, please pick a column to drop your "+ nextColor+ " chip.");

}

function check(){
  var ifDraw = true;
  var hasWinner = false;
  aim = whoIsNext ? "X" : "O";
  for(ind1 = 0; ind1 < 6; ind1++){
    for(ind2 = 0; ind2+3 < 7; ind2++){
      if(arr[ind1][ind2] == aim && arr[ind1][ind2+1] == aim && arr[ind1][ind2+2] == aim && arr[ind1][ind2+3] == aim)
      {
      console.log("Winner");
      restart();
      hasWinner = true;
    }
    }
  }
  for(ind1 = 0; ind1 < 7; ind1++){
    for(ind2 = 0; ind2+3 < 6; ind2++){
      if(arr[ind2][ind1] == aim && arr[ind2 +1][ind1] == aim && arr[ind2+2][ind1] == aim && arr[ind2+3][ind1] == aim)
      {
      console.log("Winner");
      restart();
      hasWinner = true;
    }
    }
  }
  for(ind1 = 0; ind1+3 < 7; ind1++){
    for(ind2 = 0; ind2+3 < 6; ind2++){
      if(arr[ind2][ind1] == aim && arr[ind2+1][ind1+1] == aim && arr[ind2+2][ind1+2] == aim && arr[ind2+3][ind1+3] == aim)
      {
      console.log("Winner");
      restart();
      hasWinner = true;
    }
    }
  }
  for(ind1 = 0; ind1+3< 7; ind1++){
    for(ind2 = 5; ind2-3 >= 0; ind2--){
      if(arr[ind2][ind1] == aim && arr[ind2-1][ind1+1] == aim && arr[ind2-2][ind1+2] == aim && arr[ind2-3][ind1+3] == aim)
      {
      console.log("Winner");
      restart();
      hasWinner = true;
    }
    }
  }


  if(!hasWinner) {
  for(ind1 = 0; ind1 < 6; ind1++){
    for(ind2 = 0; ind2 < 7; ind2++){
      if(arr[ind1][ind2] === 0){
        ifDraw = false;
      }
    }
  }
  if(ifDraw) {
$(".container").slideUp(3000);
    setTimeout(function() {
      $(".containerNew").html("<h1>It is draw!</h1><h2>Resfresh your page to start again</h2>");

    }, 3200);
      setInterval("changeHeaderColor()",500);

  }
}


  function restart(){
    winner = whoIsNext ? first : second;
    console.log(arr);
  $(".container").slideUp(3000);
    setTimeout(function() {
      $(".containerNew").html("<h1>Winner is "+ winner +"</h1><h2>Resfresh your page to start again</h2>");

    }, 3200);
    setInterval("changeHeaderColor()",500);
  }
}

function getRandomColor(){
  var letters = "0123456789ABCDEF";
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color
}

function changeHeaderColor(){
  newColor = getRandomColor();
  $(".containerNew").css("color", newColor);
}
