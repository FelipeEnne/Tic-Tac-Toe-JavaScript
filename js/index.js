const gameBoard = (space, value) => {
  const board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  const changeSpace = (space, value) => board[space] = value;
  const getValue = (space) => {
    return(board[space]);
  };

  return { board, changeSpace, getValue };
}

const player = (name) => {
  const victor = (player) => {
    return name + " won!!!";
  }
  const turn = (player) => {
    return(player.name);
  }
  return{ name, victor, turn };
}

let playTurn = 1;

function init() {
  const board = gameBoard();
  return(board)
}

function initPlayers(name) {
  const play = player(name);
  play.victor();
  return(play);
}

function updateSpace(board, space, value){
  board.changeSpace(space, value);
}

let countSpaces = 0;

function space(value){
  updateSpace(board, value, playTurn);
  render(board);
  console.log(countSpaces)
  if(checkBoard(playTurn) == false){
    playTurn == 1 ? playTurn = 2 : playTurn = 1;
    if(countSpaces == 8){
      document.getElementById('player-turn').innerHTML = "Tied! start again";
    }else if(playTurn == 1){
      countSpaces ++;
      document.getElementById('player-turn').innerHTML = player1.name + "'s turn";
    } else {
      countSpaces ++;
      document.getElementById('player-turn').innerHTML = player2.name + "'s turn";
    }
  } else if(playTurn == 1){
    document.getElementById('player-turn').innerHTML = player1.name + " won!!!";
    renderWinnerBorder(board);
  } else {
    document.getElementById('player-turn').innerHTML = player2.name + " won!!!";
    renderWinnerBorder(board);
  }
  return playTurn;
}

function checkBoard(play){

  for(let i = 0; i <= 2 ; i++){
    if((board.getValue(i * 3) == board.getValue(i * 3 + 1) &&
        board.getValue(i * 3) == board.getValue(i * 3 + 2) &&
        board.getValue(i * 3) != 0)|| 
       (board.getValue(i) == board.getValue(i + 3) && 
        board.getValue(i) == board.getValue(i + 6) &&
        board.getValue(i) != 0)){
      return true;
    }
  }

  if((board.getValue(0) == board.getValue(4) &&
      board.getValue(0) == board.getValue(8) &&
      board.getValue(0) != 0) ||
     (board.getValue(2) == board.getValue(4) &&
      board.getValue(2) == board.getValue(6) &&
      board.getValue(2) != 0)){
    return true;
  }

  return false;
}

function openModel() {
  document.getElementById('model').style.display = 'block';
}

function closeModel() {
  document.getElementById('model').style.display = 'none';
}

function playGame() {
  closeModel();
  board = init();
  countSpaces = 0;

  let p1Name = document.getElementById('player1').value;
  let p2Name = document.getElementById('player2').value;

  if(p1Name == ""){
    p1Name = "Player1"
  }
  if(p2Name == ""){
    p2Name = "Player2"
  }

  player1 = initPlayers(p1Name);
  player2 = initPlayers(p2Name);


  document.getElementById('player-turn').innerHTML = player1.name + "'s turn";

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

function renderWinnerBorder(board) {
  let tableRows = "";
  for(i = 0; i <= 2; i++){
    tableRows += `<tr class="table-rows">`;
    for(j = 0; j <= 2; j++){
      if(board.getValue(i * 3 + j) == 0){
        tableRows += `<th class="board-border"></th>`;
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


//playGame()
