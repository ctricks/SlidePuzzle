function SayHello()
{
    console.log('Hello World!');
}

let board;
let rows = 5;
let columns = 5;

function setGame()
{
    board=[
        [1,2,3,4,5],
        [6,7,8,9,10],
        [11,12,13,14,15],
        [16,17,18,19,20],
        [21,22,23,24,0],
    ];

    for(let r=0;r<rows;r++)
    {
        for(let c=0;c<columns;c++)
        {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();

            let num = board[r][c];

            updateTile(tile,num);

            document.getElementById("board").append(tile);
        }        
    }
    console.log(columns);
}

function updateTile(tile,num)
{
    tile.innerText = "";
    tile.classList.value = "";

    tile.classList.value = "tile";

    console.log(num);
    if(num > 0)
    {
        tile.innerText = num.toString();
        tile.classList.add("TileNum");
    }    
}

window.onload = function(){
	setGame();
}

function numSlide(e)
{
    if(["ArrowLeft"].includes(e.code))
    {
        e.preventDefault();
        if(e.code == "ArrowLeft")
        {
            
        }
    }

}