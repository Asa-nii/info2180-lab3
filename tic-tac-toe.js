window.addEventListener("load",function(){
    const squares= document.querySelectorAll("#board div");
    let game = ["","","","","","","","",""];
    let turn =0;

    squares.forEach(function (square,index){
        square.classList.add("square");

        square.addEventListener("click", function() {
            const player = turn % 2 === 0? "X": "O";
            game[index] = player;
            square.textContent=player;
            square.classList.add(player);
            turn++;
        });
    
        square.addEventListener("mouseover", function(){
            square.classList.add("hover");
        });

        square.addEventListener("mouseout", function(){
            square.classList.remove("hover");
        });
    });
});
