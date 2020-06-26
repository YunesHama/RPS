
let rps = {
    eYou : null,
    eCom : null,
    eSel : null,
    eGo : null,
    eWin : null, wins : 0,
    eLose: null, loses : 0,
    eDraw : null, draws : 0,


    load : function () {

        let images = ["game-rock.png", "game-paper.png", "game-scissors.png"],
            img = null,
            loaded = 0;
        for (let i of images) {
            img = new Image();
            img.onload = function(){
                loaded++;
                if (loaded == images.length) { rps.init(); }
            };
            img.src = i;
        }
    },

    init : function () {

        rps.eYou = document.getElementById("rps-you-move");
        rps.eCom = document.getElementById("rps-com-move");
        rps.eSel = document.getElementById("rps-you-sel");
        rps.eGo = document.getElementById("rps-you-go");
        rps.eWin = document.getElementById("rps-win");
        rps.eLose = document.getElementById("rps-lose");
        rps.eDraw = document.getElementById("rps-draw");
        rps.eSel.addEventListener("change", rps.switch);
        rps.switch();
        rps.eGo.addEventListener("click", rps.game);
        rps.eSel.disabled = false;
        rps.eGo.disabled = false;
    },

    switch : function () {


        var img = new Image();
        img.src = "game-" + rps.eSel.value + ".png";
        rps.eYou.innerHTML = "";
        rps.eYou.appendChild(img);
    },

    game : function () {

        let comMove = Math.random();
        if (comMove <= 0.33) { comMove = "rock"; }
        else if (comMove <= 0.67) { comMove = "paper"; }
        else { comMove = "scissors"; }


        let img = new Image();
        img.src = "game-" + comMove + ".png";
        rps.eCom.innerHTML = "";
        rps.eCom.appendChild(img);


        let youMove = rps.eSel.value;
        if (youMove == comMove) {
            rps.draws++;
            rps.eDraw.innerHTML = rps.draws;
            alert("DRAW");
        } else {
            let win = true;
            switch (youMove) {
                case "rock":
                    if (comMove=="paper") { win = false; }
                    break;
                case "paper":
                    if (comMove=="scissors") { win = false; }
                    break;
                case "scissors":
                    if (comMove=="rock") { win = false; }
                    break;
            }
            if (win) {
                rps.wins++;
                rps.eWin.innerHTML = rps.wins;
                alert("YOU WIN");
            } else {
                rps.loses++;
                rps.eLose.innerHTML = rps.loses;
                alert("YOU LOSE");
            }
        }
    }
};
window.addEventListener("load", rps.load);