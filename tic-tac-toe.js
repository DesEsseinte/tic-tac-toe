function onLoad(){

  const humanBTN=document.querySelector('#opponentHuman');
    humanBTN.addEventListener('click', ()=>{
      displayController.playHuman();
      displayController.restart();
    })

  const computerEASY=document.querySelector('#easy');
      computerEASY.addEventListener('click', ()=>{
        console.log("I'm not yet programmed!");
      })

  const computerHARD=document.querySelector('#hard');
      computerHARD.addEventListener('click', ()=>{
        console.log("I'm also not programmed!");
      })

  const startOverBTN=document.querySelector('#startOver');
      startOverBTN.addEventListener('click', ()=>{
        displayController.restart();
      })

}






                                          ///////player creation///////////

  const playerFactory=(sign)=>{
    return {sign}
  }
      const player1=playerFactory('X');
      const player2=playerFactory('O');







            /////////// creates gameboard array and "attaches it" to DOM(classnames added 1-9).///////////

  const gameBoard=(function () {

    let board=[
      ['0','1','2'],
      ['3','4','5'],
      ['6','7','8'],
      ['0','3','6'],
      ['1','4','7'],
      ['2','5','8'],
      ['2','4','6'],
      ['0','4','8'],
    ]
    function createsGameBoard () {
      let i=0;
      function increment(){i++};
      const square=document.querySelectorAll('.boardSquare');
        square.forEach(item=>{
          item.classList.add(i);
          item.textContent='';
          increment();
        });
    }

      return{
        board,

        createBoard:createsGameBoard,

        resetBoard:function(){
          gameBoard.board=  [
              ['0','1','2'],
              ['3','4','5'],
              ['6','7','8'],
              ['0','3','6'],
              ['1','4','7'],
              ['2','5','8'],
              ['2','4','6'],
              ['0','4','8'],
            ]
          return board;
        }
      }
  })();










                                  ///////what happens upon interacting with GUI buttons and clicks/////////
      const displayController=(function() {

        const playHuman=()=>{
          gameBoard.createBoard();
          const square=document.querySelectorAll('.boardSquare');
            square.forEach(item=>{
              item.addEventListener('click', ()=>{
                if(item.textContent==''){
                gameFlow.markSquare(item);
                }
              })
            })
          }

        const restart=()=>{
          gameBoard.createBoard();
          gameBoard.resetBoard();
          gameFlow.roundReset();
          const message=document.querySelector('#messageDisplay');
          message.textContent='';
        }


        return{
          playHuman,
          restart,
        }
      })();









          ///////functions to control game flow: round#, which sign to place, check for a winner, etc..///////////////


    const gameFlow=(function (){

      let round=1;
      let currentPlayer;

      const markSquare=(item)=>{
        round%2==0? currentPlayer=player2: currentPlayer=player1;
        item.textContent=currentPlayer.sign;
        updateBoardArray(item);
        endGame.checkWin(currentPlayer);
        endGame.tie();
        round++;

        return{round};
      }

      function updateBoardArray(item){
        let boxNumber=item.className[item.className.length-1];   //0 for example.
        gameBoard.board.forEach(index =>{
          for(i=0;i<=2;i++){
            if(index[i]==boxNumber){index[i]=currentPlayer.sign}
          }
        })
      }


      function roundReset(){
        round = 1;
      }

      return{
        round,
        markSquare,
        roundReset,
      }
    })();






                          ////////////code which evaluates to see if winner or tie.//////////

const endGame=(function() {
  const message=document.querySelector('#messageDisplay');

    function checkWin(currentPlayer){
      gameBoard.board.forEach(item => {
        let counter=0;
        for(i=0;i<=2;i++){
          if(item[i]==currentPlayer.sign){counter +=1}
          if(counter==3){message.textContent=currentPlayer.sign + " wins!"}
          }
        })
    }

    function tie(){
      let counter=0;
      gameBoard.board.forEach(item =>{
          for(c=0;c<=2;c++){
            if(item[c]=='X' || item[c]=='O'){counter +=1}
            }
      })
      if(counter==24){message.textContent="Tie."}
    }

      return{
        checkWin,
        tie
      }
})();


onLoad();