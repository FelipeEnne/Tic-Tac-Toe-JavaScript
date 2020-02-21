const gameBoard = (space, value) => {
  const board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  const changeSpace = (space, value) => board[space] = value;
  const getValue = (space) => {
    return(board[space]);
  };

  return { board, changeSpace, getValue };
}

const player = (name, symbol) => {
  const victor = () => console.log(name + " won!!!");
  return{ name, symbol, victor };
}

let playTurn = 1;

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

function space(value){
  updateSpace(board, value, playTurn);
  c = checkBoard(playTurn);
  playTurn == 1 ? playTurn = 2 : playTurn = 1;
  render(board);
  // console.log(board)
  return playTurn;
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

  player1 = initPlayers('Raphael', 'X');
  player2 = initPlayers('Felipe', 'O');

  console.log(board);
  render(board);
}

function render(board) {
  let tableRows = "";
  for(i = 0; i <= 2; i++){
    tableRows += `<tr class="table-rows">`;
    for(j = 0; j <= 2; j++){
      if(board.getValue(i * 3 + j) == 0){
        tableRows += `<th class="board-border" onclick="space(${i * 3 + j})"></th>`;
      } else if(board.getValue(i * 3 + j) == 1){
        tableRows += `<th class="board-border text-center background-X"></th>`;
      } else {
        tableRows += `<th class="board-border text-center background-O"></th>`;
      };
    };
    tableRows += `</tr>`;
  };
  document.getElementById("table-rows").innerHTML = tableRows;
}


playGame()
