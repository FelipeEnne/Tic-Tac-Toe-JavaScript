let playTurn = 1;
let countSpaces = 0;
let AI;


const gameBoard = (space, value) => {
  const board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  const changeSpace = (space, value) => {
    board[space] = value;
  };
  const getValue = (space) => (board[space]);

  return { board, changeSpace, getValue };
};

const player = (name) => {
  const victor = (player) => `${name} won!!!`;
  const turn = (player) => (player.name);
  return { name, victor, turn };
};

function init() {
  const board = gameBoard();
  return (board);
}

function initPlayers(name) {
  const play = player(name);
  play.victor();
  return (play);
}

function updateSpace(board, space, value) {
  board.changeSpace(space, value);
}

function render(board) {
  let tableRows = '';
  for (let i = 0; i <= 2; i += 1) {
    tableRows += '<tr class="table-rows">';
    for (let j = 0; j <= 2; j += 1) {
      if (board.getValue(i * 3 + j) === 0) {
        tableRows += `<th class="board-border" onclick="space(${i * 3 + j})"></th>`;
      } else if (board.getValue(i * 3 + j) === 1) {
        tableRows += '<th class="board-border text-center background-X"></th>';
      } else {
        tableRows += '<th class="board-border text-center background-O"></th>';
      }
    }
    tableRows += '</tr>';
  }
  document.getElementById('table-rows').innerHTML = tableRows;
}

function renderWinnerBorder(board) {
  let tableRows = '';
  for (let i = 0; i <= 2; i += 1) {
    tableRows += '<tr class="table-rows">';
    for (let j = 0; j <= 2; j += 1) {
      if (board.getValue(i * 3 + j) === 0) {
        tableRows += '<th class="board-border"></th>';
      } else if (board.getValue(i * 3 + j) === 1) {
        tableRows += '<th class="board-border text-center background-X"></th>';
      } else {
        tableRows += '<th class="board-border text-center background-O"></th>';
      }
    }
    tableRows += '</tr>';
  }
  document.getElementById('table-rows').innerHTML = tableRows;
}

function checkBoard(play, board = this.board) {
  for (let i = 0; i <= 2; i += 1) {
    if ((board.getValue(i * 3) === board.getValue(i * 3 + 1)
        && board.getValue(i * 3) === board.getValue(i * 3 + 2)
        && board.getValue(i * 3) !== 0)
       || (board.getValue(i) === board.getValue(i + 3)
        && board.getValue(i) === board.getValue(i + 6)
        && board.getValue(i) !== 0)) {
      return true;
    }
  }

  if ((board.getValue(0) === board.getValue(4)
      && board.getValue(0) === board.getValue(8)
      && board.getValue(0) !== 0)
     || (board.getValue(2) === board.getValue(4)
      && board.getValue(2) === board.getValue(6)
      && board.getValue(2) !== 0)) {
    return true;
  }

  return false;
}

function changeTurn() {
  if (playTurn === 1) {
    playTurn = 2;
  } else {
    playTurn = 1;
  }
}

function space(value, board = this.board) {
  updateSpace(board, value, playTurn);
  render(board);
  if (checkBoard(playTurn) === false) {
    changeTurn();
    if (countSpaces === 8) {
      document.getElementById('player-turn').innerHTML = 'Tied! start again';
    } else if (playTurn === 1) {
      countSpaces += 1;
      document.getElementById('player-turn').innerHTML = `${this.player1.name}'s turn`;
    } else {
      countSpaces += 1;
      if (AI === true) {
        let random = Math.floor(Math.random() * 9);
        while (board.getValue(random) !== 0) {
          random = Math.floor(Math.random() * 9);
        }
        updateSpace(board, random, playTurn);
        changeTurn();
      }
      render(board);
      document.getElementById('player-turn').innerHTML = `${this.player2.name}'s turn`;
    }
  } else if (playTurn === 1) {
    document.getElementById('player-turn').innerHTML = `${this.player1.name} won!!!`;
    renderWinnerBorder(board);
  } else {
    document.getElementById('player-turn').innerHTML = `${this.player2.name} won!!!`;
    renderWinnerBorder(board);
  }
  return playTurn;
}

function openModel() {
  document.getElementById('model').style.display = 'block';
}

function openModelAI() {
  document.getElementById('modelAI').style.display = 'block';
}

function closeModel() {
  document.getElementById('model').style.display = 'none';
}

function closeModelAI() {
  document.getElementById('modelAI').style.display = 'none';
}

function playGameAI(board = this.board) {
  closeModelAI();
  board = init();
  countSpaces = 0;
  AI = true;

  let pName = document.getElementById('player').value;

  if (pName === '') {
    pName = 'Player';
  }

  this.player1 = initPlayers(pName);
  this.player2 = initPlayers('AI');

  document.getElementById('player-turn').innerHTML = `${this.player1.name}'s turn`;

  render(board);
}

function playGame(board = this.board) {
  closeModel();
  board = init();
  countSpaces = 0;
  AI = false;

  let p1Name = document.getElementById('player1').value;
  let p2Name = document.getElementById('player2').value;

  if (p1Name === '') {
    p1Name = 'Player1';
  }
  if (p2Name === '') {
    p2Name = 'Player2';
  }

  this.player1 = initPlayers(p1Name);
  this.player2 = initPlayers(p2Name);


  document.getElementById('player-turn').innerHTML = `${this.player1.name}'s turn`;

  render(board);
}
