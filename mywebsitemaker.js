var header = document.querySelector("h1")
//dont know what this is tbh
header.style.color="red"

function getRandomColor() {
    var letters= "0123456789ABCDEF";
    var color="#";
    for (var i=0;i<6;i++){
        color+= letters[Math.floor(math.random()*16)]
    }
    return color
}


function changeHeaderColor() {
    colorInput = getRandomColor()
    Header.style.color=colorInput
}

setInterval("change()",500);

//bro bro bro

var headOne=document.querySelector("#one")
var headTwo=document.querySelector("#two")
var headThree=document.querySelector("#three")
var headFour=document.querySelector("#four")
var headFive=document.querySelector("#five")

console.log("connected!");

//tic tac toe

var ticOne=document.querySelector(".cell-1")

ticOne.addEventListener("dblclick",function() {
    ticOne.textContent="X"
    ticOne.style.color="greenyellow"

})

var ticTwo=document.querySelector(".cell-2")

ticTwo.addEventListener("dblclick",function() {
    ticTwo.textContent="O"
    ticTwo.style.color="blue"

})

ticTwo.addEventListener("click",function() {
    ticTwo.textContent=""
    ticTwo.style.color="blue"

})






var ticThree=document.querySelector(".cell-3")

ticThree.addEventListener("dblclick",function() {
ticThree.textContent="O"
ticThree.style.color="greenyellow"    
})

ticThree.addEventListener("click",function() {
    ticThree.textContent="X"
    ticThree.style.color="greenyellow"    
    })
    

    var ticFour=document.querySelector(".cell-4")

    ticFour.addEventListener("dblclick",function() {
    ticFour.textContent="O"
    ticFour.style.color="blue"    
    })
    
    ticFour.addEventListener("click",function() {
        ticFour.textContent="X"
        ticFour.style.color="blue"    
        })
    
//JOSE'S TIC TAC TOE
var restart=document.querySelector(".tic");

var squares=document.querySelectorAll('td')

function clearboard() {
 for (let i = 0; i < squares.length; i++) {
     squares[i].textContent='';
     
 }   
}

restart.addEventListener(click.clearboard)

