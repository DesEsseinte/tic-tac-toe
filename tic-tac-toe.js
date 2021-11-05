   const createGameBoard =()=>{
      let i=0;
      function iIncrement(){i++};
      const gameBoard=['','X','','','O','','','',''];
      const square=document.querySelectorAll('.boardSquare');
      square.forEach(item => {
        item.classList.add(i);
        iIncrement();
      })

    };
//when game-type is choosen and game begins (click event)
    function startGame(){

    }





     //Code to set up human vs human game and "reset".

     const playerFactory=(sign)=>{
        const chooseBox=()=>{
        let round=1;
        const square=document.querySelectorAll('.boardSquare');
        square.forEach(item => {
          item.addEventListener('click', ()=>{
          if(item.textContent==''){
            if(round%2!=0 && item.textContent==''){
              currentPlayer=playerOne;
            }else{currentPlayer=playerTwo}
            item.textContent=currentPlayer.sign;
            round++;
          }
          });
        });
      }
      return{sign,chooseBox};
    }

/*
    const playerFactory=(sign)=>{

      let gameBoard=['','','','','','','','',''];
        const createGameBoard =()=>{
          let i=0;
          function iIncrement(){i++};
          const square=document.querySelectorAll('.boardSquare');
          square.forEach(item => {
            item.textContent=gameBoard[i];
            iIncrement();
          })
        };


      const chooseBox=()=>{
       let round=1;
       const square=document.querySelectorAll('.boardSquare');
       square.forEach(item => {
         item.addEventListener('click', ()=>{
           gameBoard[item]=playerOne.sign;
           createGameBoard();
         });
       });
     }
     return{sign,chooseBox,createGameBoard,gameBoard};

   }
*/

  const playerOne = playerFactory('X');
  const playerTwo = playerFactory('O');


const opponentHuman=document.querySelector('#opponentHuman');
  opponentHuman.addEventListener('click', ()=>{
    playerOne.chooseBox();
  });
const startOverBtn=document.querySelector('#startOver');
  startOverBtn.addEventListener('click', ()=>{
    const square=document.querySelectorAll('.boardSquare');
    square.forEach(item => {
      item.textContent='';
    })
  });





        //setting up computer-easy functionality.
/*
  const playerFactory=(sign)=>{
    const chooseBox=()=>{
      let round=1;
      const square=document.querySelectorAll('.boardSquare');
      square.forEach(item => {
        item.addEventListener('click', ()=>{
          item.textContent=playerOne.sign;
          round++;
          n=3;
          item.textContent=playerTwo.sign;
        });
      });
    }
    return{sign,chooseBox};
  }




  const playerOne = playerFactory('X');
  const playerTwo = playerFactory('O');
*/




const easyBtn=document.querySelector('#easy');
  easyBtn.addEventListener('click', () => {
      playerOne.chooseBox();
  });