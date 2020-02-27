

function render(board) {
    let tableRows = "";
    for (let i = 0; i <= 2; i += 1) {
        tableRows += '<tr class="table-rows">';
        for (let j = 0; j <= 2; j += 1) {
            if (board.getValue(i * 3 + j) === 0) {
                tableRows += `<th class="board-border" onclick="space(${i * 3 +
          j})"></th>`;
            } else if (board.getValue(i * 3 + j) === 1) {
                tableRows += '<th class="board-border text-center background-X"></th>';
            } else {
                tableRows += '<th class="board-border text-center background-O"></th>';
            }
        }
        tableRows += "</tr>";
    }
    document.getElementById("table-rows").innerHTML = tableRows;
}

function renderWinnerBorder(board) {
    let tableRows = "";
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
        tableRows += "</tr>";
    }
    document.getElementById("table-rows").innerHTML = tableRows;
}

export { render, renderWinnerBorder };