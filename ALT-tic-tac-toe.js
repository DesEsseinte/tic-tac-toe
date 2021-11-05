let gameBoard=['','','','','','','','',''];


//binds gameBoard array to display board on page.
function createGameBoard(){
  let i=0;
  function iIncrement(){i++};
  const square=document.querySelectorAll('.boardSquare');
    square.forEach(item=>{
      item.classList.add(i);
      iIncrement();
    })
}



//after clicking box this will update the array in the background.
function updateBoardArray(sign){
  const square=document.querySelectorAll('.boardSquare');
    square.forEach(item=>{
      item.addEventListener('click', ()=>{
        let box=item.className[item.className.length-1]   //item.className #s only would be best
        gameBoard[box]=sign
      })
    });
}



//after clicking box this will update the board as displayed on page.
function displayBoard(sign){
  let round=1;
  const square= document.querySelectorAll('.boardSquare')
    square.forEach(item => {
      item.addEventListener('click', ()=>{
        if(item.textContent==''){
          if(round%2!=0 && item.textContent==''){
            currentPlayer=playerOne;
          }else{currentPlayer=playerTwo}
          item.textContent=currentPlayer.sign;
          round++;
        }
      })
    })
}




//build funcitons into this to allow playerOne.updateBoard('x')...etc)
function playerFactory(sign){
  displayBoard(sign);
  updateBoardArray(sign);
return [displayBoard,updateBoardArray]


}






function startGame(){
  createGameBoard();
  const playerOne = playerFactory('X');
  const playerTwo = playerFactory('O');



}
const opponentHuman=document.querySelector('#opponentHuman');
  opponentHuman.addEventListener('click', ()=>{
    startGame();
  });