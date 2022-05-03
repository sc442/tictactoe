let turn = true;

function initializeCount(){
    return {
        o: 0,
        x: 0
    }
}

// Stupid way to do it 
let rows = [];
let columns = [];
for(let i = 0; i < 3; i++){
    rows.push(initializeCount());
    columns.push(initializeCount());
}
let diag = initializeCount();
let antidiag = initializeCount();

function evaluateTurn(r, c, t){
    let turn = t ? 'o' : 'x';
    rows[r][turn]++;
    columns[c][turn]++;
    if(r==c) diag[turn]++;
    if(r+c==2) antidiag[turn]++;

    if(rows[r][turn] == 3 || columns[c][turn] == 3 || diag[turn] == 3 || antidiag[turn] == 3) alert(turn + " won!!");
}

for(let i = 0; i < 9; i++){
    let element = document.getElementById(i);
    let r = Math.floor(i / 3);
    let c = i % 3;
    function handleClick() {
        element.textContent = turn ? "o" : "x";
        evaluateTurn(r,c, turn)

        turn = !turn;
        element.removeEventListener("click", handleClick);
    }
    element.addEventListener("click", handleClick);
}
