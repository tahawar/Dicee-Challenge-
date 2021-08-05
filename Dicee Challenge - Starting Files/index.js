// dice 1

var ran1=Math.floor(Math.random()*6)+1;

var image="images/"+"dice"+ran1+".png";

var image1=document.querySelectorAll("img")[0];


image1.setAttribute("src", image);

//dice 2
var ran2=Math.floor(Math.random()*6)+1;

var image2="images/"+"dice"+ran2+".png";

var image21=document.querySelectorAll("img")[1];


image21.setAttribute("src", image2);

// conditon for win or lose
if(ran1>ran2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}else if(ran2>ran1){
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}


