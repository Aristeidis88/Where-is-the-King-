var name = prompt("Enter your Name");
alert("Hello " + name + ". We Pay 2/1 for every right guess." + "\n" + "Good luck!!");

document.getElementsByTagName("h3")[0].innerHTML = name;



document.querySelector("button").addEventListener("click", function (){
    
var pick = Math.floor (Math.random()*4+1);

switch (pick) {

case 1 :
    var flip = new Audio("flip.mp3");
    flip.play();
document.getElementById("card").setAttribute("src","eight.png");
setTimeout(function(){document.getElementById("card").setAttribute("src","card.png");},1000);
break;

case 2 :
    var flip = new Audio("flip.mp3");
    flip.play();
document.getElementById("card").setAttribute("src","nine.png");
setTimeout(function(){document.getElementById("card").setAttribute("src","card.png");},1000);
break;

case 3 :
    var flip = new Audio("flip.mp3");
    flip.play();
document.getElementById("card").setAttribute("src","thirteen.png");
setTimeout(function(){document.getElementById("card").setAttribute("src","card.png");},1000);
break;

case 4 :
    var flip = new Audio("flip.mp3");
    flip.play();
document.getElementById("card").setAttribute("src","thirteen.png");
setTimeout(function(){document.getElementById("card").setAttribute("src","card.png");},1000);
break;}









if (pick < 3 ) {
    
    document.getElementsByTagName("h1")[0].innerHTML = "You lost";
    setTimeout(function(){document.getElementsByTagName("h1")[0].innerHTML = "Where is the King?";},1000);
    document.getElementsByTagName("p")[1].innerHTML= document.getElementsByTagName("p")[1].innerHTML ---5;
}

else {
    document.getElementsByTagName("h1")[0].innerHTML = "You won";
    setTimeout(function(){document.getElementsByTagName("h1")[0].innerHTML = "Where is the King?";},1000);
    document.getElementsByTagName("p")[1].innerHTML= document.getElementsByTagName("p")[1].innerHTML +++10;}

//you doumbled your money or bankrupt and refresh
if (document.getElementsByTagName("p")[1].innerHTML>= 100){
    document.getElementsByTagName("h2")[0].style.color = "green";
    document.getElementsByTagName("h2")[0].style.fontSize = "150px";
    document.getElementsByTagName("h2")[0].style.backgroundImage = "url('moneybag.png')";
    document.getElementsByTagName("h2")[0].innerHTML = "Ok, you doubled your money. Get the hell out of here!!!";
    var won = new Audio("won.mp3");
    won.play();
    setTimeout("location.reload(true);", 4000);}

else if (document.getElementsByTagName("p")[1].innerHTML<= 0){
    document.getElementsByTagName("h2")[0].innerHTML = "You should go home now pal";
    document.getElementsByTagName("h2")[0].style.backgroundImage = "url('pockets.png')";
    var lose = new Audio("lose.mp3");
    lose.play();
    setTimeout("location.reload(true);", 4000);}

})

//card2

document.querySelectorAll("button")[1].addEventListener("click", function (){

    var pick = Math.floor (Math.random()*3+1);
    
    switch (pick) {
    
    case 1 :
        var flip = new Audio("flip.mp3");
    flip.play();
    document.getElementById("card2").setAttribute("src","eight.png");
    setTimeout(function(){document.getElementById("card2").setAttribute("src","card.png");},1000);
    break;
    
    case 2 :
        var flip = new Audio("flip.mp3");
    flip.play();
    document.getElementById("card2").setAttribute("src","nine.png");
    setTimeout(function(){document.getElementById("card2").setAttribute("src","card.png");},1000);
    break;
    
    case 3 :
        var flip = new Audio("flip.mp3");
    flip.play();
    document.getElementById("card2").setAttribute("src","thirteen.png");
    setTimeout(function(){document.getElementById("card2").setAttribute("src","card.png");},1000);
    break;

    case 4 :
        var flip = new Audio("flip.mp3");
    flip.play();
        document.getElementById("card").setAttribute("src","thirteen.png");
        setTimeout(function(){document.getElementById("card").setAttribute("src","card.png");},1000);
        break;}
   


if (pick < 3 ) {
    document.getElementsByTagName("h1")[0].innerHTML = "You lost";
    setTimeout(function(){document.getElementsByTagName("h1")[0].innerHTML = "Where is the King?";},1000);
    document.getElementsByTagName("p")[1].innerHTML= document.getElementsByTagName("p")[1].innerHTML ---5;
}

else {
    document.getElementsByTagName("h1")[0].innerHTML = "You won";
    setTimeout(function(){document.getElementsByTagName("h1")[0].innerHTML = "Where is the King?";},1000);
    document.getElementsByTagName("p")[1].innerHTML= document.getElementsByTagName("p")[1].innerHTML +++10;
    }
//you doumbled your money or bankrupt and refresh
if (document.getElementsByTagName("p")[1].innerHTML>= 100){
    document.getElementsByTagName("h2")[0].style.color = "green";
    document.getElementsByTagName("h2")[0].style.fontSize = "150px";
    document.getElementsByTagName("h2")[0].style.backgroundImage = "url('moneybag.png')";
    document.getElementsByTagName("h2")[0].innerHTML = "Ok, you doubled your money. Get the hell out of here!!!";
    var won = new Audio("won.mp3");
    won.play();
    setTimeout("location.reload(true);", 4000);}

else if (document.getElementsByTagName("p")[1].innerHTML<= 0){
    document.getElementsByTagName("h2")[0].innerHTML = "You should go home now pal";
    document.getElementsByTagName("h2")[0].style.backgroundImage = "url('pockets.png')";
    var lose = new Audio("lose.mp3");
    lose.play();
    setTimeout("location.reload(true);", 4000);}
})



//card3
document.querySelectorAll("button")[2].addEventListener("click",function(){

var pick = Math.floor (Math.random ()*3+1);
switch(pick) {

    case 1 :
        var flip = new Audio("flip.mp3");
    flip.play();
        document.getElementById("card3").setAttribute("src","eight.png");
        setTimeout(function(){document.getElementById("card3").setAttribute("src","card.png");},1000);
        break;
        
        case 2 :
            var flip = new Audio("flip.mp3");
    flip.play();
        document.getElementById("card3").setAttribute("src","nine.png");
        setTimeout(function(){document.getElementById("card3").setAttribute("src","card.png");},1000);
        break;
        
        case 3 :
            var flip = new Audio("flip.mp3");
    flip.play();
       document.getElementById("card3").setAttribute("src","thirteen.png"); 
        setTimeout(function(){document.getElementById("card3").setAttribute("src","card.png");},1000);
        break;

case 4 :
    var flip = new Audio("flip.mp3");
    flip.play();
document.getElementById("card").setAttribute("src","thirteen.png");
setTimeout(function(){document.getElementById("card").setAttribute("src","card.png");},1000);
break;    }



if (pick < 3 ) {
    document.getElementsByTagName("h1")[0].innerHTML = "You lost";
    setTimeout(function(){document.getElementsByTagName("h1")[0].innerHTML = "Where is the King?";},1000);
    document.getElementsByTagName("p")[1].innerHTML= document.getElementsByTagName("p")[1].innerHTML ---5;
    
    
    
}

else {
    document.getElementsByTagName("h1")[0].innerHTML = "You won";
    setTimeout(function(){document.getElementsByTagName("h1")[0].innerHTML = "Where is the King?";},1000);
    document.getElementsByTagName("p")[1].innerHTML= document.getElementsByTagName("p")[1].innerHTML +++10;}




//you doumbled your money or bankrupt and refresh
    if (document.getElementsByTagName("p")[1].innerHTML>= 100){
        document.getElementsByTagName("h2")[0].style.color = "green";
        document.getElementsByTagName("h2")[0].style.fontSize = "150px";
        document.getElementsByTagName("h2")[0].style.backgroundImage = "url('moneybag.png')";
        document.getElementsByTagName("h2")[0].innerHTML = "Ok, you doubled your money. Get the hell out of here!!!";
        var won = new Audio("won.mp3");
    won.play();
        setTimeout("location.reload(true);", 4000);}
    
    else if (document.getElementsByTagName("p")[1].innerHTML<= 0){
        document.getElementsByTagName("h2")[0].innerHTML = "You should go home now pal";
    document.getElementsByTagName("h2")[0].style.backgroundImage = "url('pockets.png')";
        var lose = new Audio("lose.mp3");
    lose.play();
        setTimeout("location.reload(true);", 4000);}

})

