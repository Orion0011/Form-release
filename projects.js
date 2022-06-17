//CONNECT FOUR GAME CODE

// var player1=prompt("Player one: enter your name,you will be blue")
// var player1Color = 'rgb(86, 151, 255)';

// var player2=prompt("Player two: enter your name,you will be red")
// var player2Color='rgb(237, 45, 73)';

// var game_on=true;
// var table=$('table tr');


// function reportWin(rowNum,colNum) {
//     console.log("you won starting at this row,col");
//     console.log(rowNum);
//     console.log(colNum);
// }

// function changeColor(rowIndex,colIndex,color) {
//     return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
// }

// function returnColor(rowIndex,colIndex) {
//     return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',);
// }

// function checkBottom(colIndex) {
//     var colorReport = returnColor(5,colIndex);
// for (let row = 5;  row>-1; row--) {
//     colorReport = returnColor(row,colIndex);
//   if (colorReport==='rbg(128, 128, 128)')
// {return row}
// }
// }

// function colorMatchCheck(one,two,three,four) {
//     return (one===two && one===three && one===four && one!=='rgb(128, 128, 128)' && one!==undefined)
// }

// //check for horizontal win
// function horizontalWinCheck() {
//     for (var row=0;row<6;row++){
//         for (var col=0;col<4;col++){
//         if (colorMatchCheck(returnColor(row,col),returnColor(row,col+1),returnColor(row,col+2))
//         ) {console.log('horiz');
//             reportWin(row,col);
//             return true;
//         }else{
//             continue;
//         }   }
//     }
// }

// function verticalWinCheck() {
//     for (var col= 0; col< 7; col++) {
//         for (let row = 0;  row<3; row++) {
//             if (colorMatchCheck(returnColor(row,col),returnColor(row+1,col),returnColor(row+2,col))
//             ) {console.log('vertical');
//                 reportWin(row,col);
//                 return true;
//             }else{
//                 continue;
//             }   }
//         }       
            
//         }
    
// function diagonalWinCheck() {
//     for (var col = 0; col < 5; col++) {
//         for (var row= 0; row<7; index++) {
//             if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col+1) ,returnColor(row+2,col+2))) {
//                 console.log('diag');
//                 reportWin(row,col);
//                 return true;
//             }else if(colorMatchCheck(returnColor(row,col), returnColor(row-1,col+1) ,returnColor(row-2,col+2)))
//             {
//                 console.log('diag');
// reportWin(row,col);
// return true;

//             }
            
            
            
//             {
//                 continue;
//             }
            
//         }
        
//     }
// }

// var currentPlayer=1;
// var currentName=player1;
// var currentColor=player1Color

// $('h3').text(player1+" it is your turn,pick a column to drop in!")

// $('.board button').on('click',function() {
//     var col=$(this).closest('td').index();

//     var bottomAvail = checkBottom(col);

// changeColor(bottomAvail,col,currentColor);

// if (horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()) {
//     $('h1').text(currentName+" you have won!")
//     $('h3').fadeout('fast');
//     $('h2').fadeout('fast');
// }
// currentPlayer=currentPlayer* -1;
// if (currentPlayer===1) {
//     currentName=player1;
//     $('h3').text(currentName+" it is your tun")
//     currentColor=player1Color
// }else {currentName=player2;
// $('h3').text(currentName+" it is your turn")

// currentColor=player2Color;
// }
// })


//MY CALCULATOR
var buttonBro=document.querySelector('#bro')
var buttonC=document.querySelector('#c')
var buttonAdd=document.querySelector('#add')
var buttonSub=document.querySelector('#sub')
var buttonMulti=document.querySelector('#multi')
var buttonDiv=document.querySelector('#div')
var buttonZero=document.querySelector('#0')
var buttonOne=document.querySelector('#1')
var buttonTwo=document.querySelector('#2')




console.log("connected");


buttonOne.addEventListener('click',function () {
    buttonOne.textContent="1"
})

buttonOne.addEventListener('click',function () {
    buttonBro.textContent='1'
})



















