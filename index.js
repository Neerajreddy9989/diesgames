
var randomnum=Math.floor(Math.random() * 6) +1;
var setpath="images/dice"+ randomnum + ".png";
document.querySelectorAll("img")[0].setAttribute("src", setpath);

var randomnum1=Math.floor(Math.random() * 6) +1;
var setpath1 ="images/dice"+randomnum1+".png";
document.querySelectorAll("img")[1].setAttribute("src",setpath1);


if(randomnum > randomnum1){
document.querySelector("h1").innerHTML="Fist win";
}
 else if(randomnum1 > randomnum){
document.querySelector("h1").innerHTML="second win";
}
else{
  document.querySelector("h1").innerHTML="draw";
}
