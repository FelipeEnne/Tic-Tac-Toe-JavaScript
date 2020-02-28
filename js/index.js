const gameBoard = () => {
  const board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  const changeSpace = (space, value) => {
    board[space] = value;
  };
  const getValue = (space) => (board[space]);

  return { board, changeSpace, getValue };
};

const player = (name) => {
  const turn = (player) => (player.name);
  return { name, turn };
};

const playTurn = (value) => {
  let playerTurn = value;

  const setPlayerTurn = (value) => {
    playerTurn = value;
  };
  const getPlayerTurn = () => (playerTurn);

  return { playerTurn, setPlayerTurn, getPlayerTurn };
};

const playTurnAI = (value) => {
  let playerAI = value;

  const setPlayerTurnAI = (value) => {
    playerAI = value;
  };
  const getPlayerTurnAI = () => (playerAI);

  return { playerAI, setPlayerTurnAI, getPlayerTurnAI };
};

function init() {
  const board = gameBoard();
  return (board);
}

function initPlayTurn() {
  const playerTurn = playTurn(1);
  return (playerTurn);
}

function initPlayTurnAI() {
  const playAI = playTurnAI(true);
  return (playAI);
}

function initPlayers(name) {
  const play = player(name);
  return (play);
}

function updateSpace(board, space, value) {
  board.changeSpace(space, value);
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

function changeTurn(playerTurn = this.playerTurn) {
  if (playerTurn.getPlayerTurn() === 1) {
    playerTurn.setPlayerTurn(2);
  } else {
    playerTurn.setPlayerTurn(1);
  }
}

function space(value, board = this.board, playerTurn = this.playerTurn) {
  updateSpace(board, value, playerTurn.getPlayerTurn());
  render(board);
  if (checkBoard(playerTurn.getPlayerTurn()) === false) {
    changeTurn();
    if (board.board.every(value => value !== 0)) {
      document.getElementById('player-turn').innerHTML = 'Tied! start again';
    } else if (playerTurn.getPlayerTurn() === 1) {
      document.getElementById('player-turn').innerHTML = `${this.player1.name}'s turn`;
    } else {
      if (this.playerTurnAI.getPlayerTurnAI() === true) {
        let random = Math.floor(Math.random() * 9);
        while (board.getValue(random) !== 0) {
          random = Math.floor(Math.random() * 9);
        }
        updateSpace(board, random, playerTurn.getPlayerTurn());
        changeTurn();
      }
      render(board);
      document.getElementById('player-turn').innerHTML = `${this.player2.name}'s turn`;
    }
  } else if (playerTurn.getPlayerTurn() === 1) {
    document.getElementById('player-turn').innerHTML = `${this.player1.name} won!!!`;
    renderWinnerBorder(board);
  } else {
    document.getElementById('player-turn').innerHTML = `${this.player2.name} won!!!`;
    renderWinnerBorder(board);
  }
  return playerTurn.getPlayerTurn();
}

function playGameAI() {
  closeModelAI();
  board = init();
  playerTurn = initPlayTurn();
  playerTurnAI = initPlayTurnAI();
  playerTurnAI.setPlayerTurnAI(true);

  let pName = document.getElementById('player').value;

  if (pName === '') {
    pName = 'Player';
  }

  this.player1 = initPlayers(pName);
  this.player2 = initPlayers('AI');

  document.getElementById('player-turn').innerHTML = `${this.player1.name}'s turn`;

  render(board);
}

function playGame() {
  closeModel();
  board = init();
  playerTurn = initPlayTurn();
  playerTurnAI = initPlayTurnAI();
  playerTurnAI.setPlayerTurnAI(false);

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
