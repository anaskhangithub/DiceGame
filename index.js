
// -----------for dice 1------------
var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomImg1 = "dice"+randomNumber1+".png";
var randomImg1Src = "images/"+randomImg1;
document.querySelectorAll("img")[0].setAttribute("src",randomImg1Src);

// -----------for dice2----------------
var randomNumber2 = Math.floor((Math.random()*6)+1);
var randomImg2 = "dice"+randomNumber2+".png";
var randomImg2Src = "images/"+randomImg2;
document.querySelectorAll("img")[1].setAttribute("src",randomImg2Src);


// ---------to check dice1 and dice2--------
if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 won";
} else if(randomNumber1>randomNumber2) {

  document.querySelector("h1").innerHTML = "Player 1 won";
}
else{
  document.querySelector("h1").innerHTML = "Match Draw,  Try Again";
}
