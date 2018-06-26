const player1 = "X";
const player2 = "O";
var playTime = player1;
var gameOver = false;

updatePanel();
startSpace();

function updatePanel() {

    if (gameOver) { return;}

    if (playTime == player1) {
        var player = document.querySelectorAll("div#panel img")[0];
        player.setAttribute("src", "img/x.png");
    } else {
        var player = document.querySelectorAll("div#panel img")[0];
        player.setAttribute("src", "img/o.png");
    }

}

function startSpace() {

    var spaces = document.getElementsByClassName("space");
    for (var i = 0; i < spaces.length; i++) {
        
        spaces[i].addEventListener("click", function(){

            if (gameOver) {return;}

            if (this.getElementsByTagName("img").length == 0) {

                if (playTime == player1) {
                    this.innerHTML = "<img src='img/x.png'>";
                    this.setAttribute("jogada", player1);
                    playTime = player2;
                } else {
                    this.innerHTML = "<img src='img/o.png'>";
                    this.setAttribute("jogada", player2);
                    playTime = player1;
                }
                updatePanel();
                checkWinner();
            }
        });
    }
}

function checkWinner() {

    var a1 = document.getElementById("a1").getAttribute("jogada");
    var a2 = document.getElementById("a2").getAttribute("jogada");
    var a3 = document.getElementById("a3").getAttribute("jogada");

    var b1 = document.getElementById("b1").getAttribute("jogada");
    var b2 = document.getElementById("b2").getAttribute("jogada");
    var b3 = document.getElementById("b3").getAttribute("jogada");

    var c1 = document.getElementById("c1").getAttribute("jogada");
    var c2 = document.getElementById("c2").getAttribute("jogada");
    var c3 = document.getElementById("c3").getAttribute("jogada");

    // explicar a varredura pelo FOR para lição de casa

    var vencedor = "";

    if(((a1 == b1 && a1 == c1) || (a1 == a2 && a1 == a3) || (a1 == b2 && a1 == c3)) && a1 != "") {
        vencedor = a1;
    } else if (((b2 == b1 && b2 == b3) || (b2 == a2 && b2 == c2) || (b2 == c1 && b2 == a3)) && b2 != ""){
        vencedor = b2;
    } else if (((c3 == c2 && c3 == c1) || (c3 == a3 && c3 == b3)) && c3 != "") {
        vencedor = c3;
    }

    if (vencedor != "") {
        gameOver = true;
        
    }
}