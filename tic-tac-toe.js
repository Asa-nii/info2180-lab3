window.addEventListener("load",function(){
    const squares= document.querySelectorAll("#board div");
    const status = document.getElementById("status");
    const gameButton= document.querySelector(".btn");
    const originalMessage=status.textContent;
    let game = ["","","","","","","","",""];
    let turn =0;


    const wins = [
        [0,1,2],[3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];

    function checkWin(player){
        for (const [a,b,c] of wins) {
            if (game[a]=== player && game[b] === player && game[c] === player){
                status.textContent= "Congratulations! " + player + " is the Winner!";
                status.classList.add("you-won")
            }
        }
     }


    squares.forEach(function (square,index){
        square.classList.add("square");

        square.addEventListener("click", function() {
            const player = turn % 2 === 0? "X": "O";
            game[index] = player;
            square.textContent=player;
            square.classList.add(player);
            checkWin(player);
            turn++;
        });
    
        square.addEventListener("mouseover", function(){
            square.classList.add("hover");
        });

        square.addEventListener("mouseout", function(){
            square.classList.remove("hover");
        });
    });

    gameButton.addEventListener("click",function(){
        game=["","","","","","","","",""];
        turn = 0;

        squares.forEach(function (square){
        square.classList.add("square");
        square.textContent = "";
        square.classList.remove("X","O");

        });
        
        status.textContent=originalMessage;
        status.classList.remove("you-won");
    });
});

