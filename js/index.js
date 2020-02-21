const gameBoard = (space, value) => {
  const board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  const changeSpace = (space, value) => board[space] = value;

  return { board, changeSpace };
}

const player = (name, symbol) => {
  const victor = () => console.log(name + " won!!!");

  return{ name, symbol, victor };
}

function init() {
  const board = gameBoard();
  return(board)
}

function initPlayers(name, symbol) {
  const play = player(name, symbol);
  play.victor();
  return(play);
}

function updateSpace(board, space, value){
  board.changeSpace(space, value);
}



//updateSpace(board, 5, 1);
//updateSpace(board, 0, 2);
//console.log(player1);
//console.log(player2);

function space(){
  return 0;//change
}

function checkBoard(play){

  for(let i = 0; i <= 2 ; i++){
    if(board[i*3] == board[i*3+1] && board[i*3+1] == board[i*3+2] || 
      board[i] == board[i+3] && board[i+6] == board[i+3]){
         return true
      }
  }

  if(board[0] == board[4] && board[8] == board[4] || 
    board[2] == board[4] && board[6] == board[4]){
       return true
  }
  

  return false;
}

function playGame(){
  board = init();

  let play = 0;

  player1 = initPlayers('Raphael', 'X');
  player2 = initPlayers('Felipe', 'O');

  let c = checkBoard(play);

  while(c == false){
    if(play === 0){
      s = space();
      updateSpace(board, s, 1);
      c = checkBoard(play);
      play = 1;
    }
    else{
      s = space();
      updateSpace(board, s, 2);
      c = checkBoard(play);
      play = 0;
    }
  }

}


playGame()

console.log(board);
