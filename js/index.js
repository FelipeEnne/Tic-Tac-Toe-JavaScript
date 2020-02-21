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

board = init();
player1 = initPlayers('Raphael', 'X');
player2 = initPlayers('Felipe', 'O');
updateSpace(board, 5, 1);
updateSpace(board, 0, 2);
console.log(player1);
console.log(player2);
// console.log(player[1].name);
// player[0].victor();
console.log(board);
