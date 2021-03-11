let board =[];
let b = document.getElementById("carogame");
let data = "<table class ='table' border='1' >";
let Player = 1; //1 là X, 2 là O
let gameover = false;
    drawTable();
    function Play (i,j) {
        if (!gameover) {
            let id = "b" + i + j;
            let pos = document.getElementById(id);
            if (checkEmpty(i, j, pos)) {
                if (Player === 1) {
                    pos.innerText = "X";
                    Player = 2;
                    board[i][j] = 1;
                } else {
                    pos.innerText = "O";
                    Player = 1;
                    board[i][j] = 2;
                }
            }
            endGame(i, j);
        }
        else {
            alert("Game Over :D");
            gameover = false;
            // document.getElementById("carogame").innerHTML ="";
            // drawTable();
            location.reload();
        }
    }

        function endGame (i,j) {
            //check hàng dọc
                    if ((board[i][0] === board[i][1]) && (board[i][0] === board[i][2])) {
                        if (board[i][0] === 1) {
                            alert("X won");
                            gameover = true;
                        }
                        else {
                            alert ("O won");
                            gameover = true;
                        }

                    }
            //check hàng ngang
            if ((board[0][j] === board[1][j]) && (board[0][j] === board[2][j])) {
                if (board[0][j] === 1) {
                    alert("X won");
                    gameover = true;
                }
                else {
                    alert ("O won");
                    gameover = true; }
            }
            //check hàng chéo 1
            if ((board[0][0] === board[1][1]) && (board[2][2] === board[0][0])) {
                if (board[1][1] === 1) {
                    alert("X won");
                    gameover = true;
                }
                else if (board[1][1] === 2) {
                    alert("O won");
                    gameover = true;
                }
            }
            //check hàng chéo 2
            if ((board[2][0] === board[1][1]) && (board[2][0] === board[0][2])) {
                if (board[1][1] === 1) {
                    alert("X won");
                    gameover = true;
                }
                else if (board[1][1] === 2) {
                    alert("O won");
                    gameover = true;
                }
            }

    }
    function checkEmpty(i,j,pos) {
        //kiểm tra ô trống
        let Empty = true;
        if (pos.innerHTML !== "") {
            Empty = false;
        }
        return Empty;
    }
function drawTable () {
    for (i = 0; i < 3; i++) {
        board [i] = new Array(0,0,0);
    }
    for (let i = 0; i < 3; i++) {
        data += "<tr>";
        for (let j = 0; j < 3; j++) {
            data += "<td class='td' id=b"+i +j+ " onclick= Play(" +i +","+j+")></td>" ;
            // let id = "b"+i+j;
        }
        data += "</tr>";
    }
    b.innerHTML = data + "</table>";
    console.log(b);
}
