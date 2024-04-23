
document.querySelectorAll("input")[0].addEventListener("click",function () {
    document.querySelectorAll("input")[0].setAttribute("href",location.reload(true));
});

var randomnumber1=Math.floor(Math.random()*6)+1;
var img1="images/dice"+randomnumber1+".jpg";
var images1=document.querySelectorAll("img")[0];
images1.setAttribute("src",img1);

var randomnumber2=Math.floor(Math.random()*6)+1;
var img2="images/dice"+randomnumber2+".jpg";
var images2=document.querySelectorAll("img")[1];
images2.setAttribute("src",img2);

if(randomnumber1>randomnumber2){

    document.querySelectorAll("h1")[0].innerHTML="Player 1 Win"
    
}else if(randomnumber1<randomnumber2){
    document.querySelectorAll("h1")[0].innerHTML="player 2 win";
}else{
    document.querySelectorAll("h1")[0].innerHTML="Draw Try again";
}



  
    

