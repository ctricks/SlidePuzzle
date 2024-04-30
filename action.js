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
    if(["ArrowLeft","ArrowRight"].includes(e.code))
    {
        e.preventDefault();
        if(e.code == "ArrowLeft")
        {
            console.log("left");
            slideLeft();
        }
        else if(e.code == "ArrowRight")
        {
            console.log("right");
            slideRight();
        }
    }

}
function canMoveRight(){
	for(let r = 0; r < rows ; r++){
		for( let c= columns -2 ; c >= 0; c--){
			if(board[r][c]!==0){
				if(board[r][c+1] === 0 || board[r][c+1] === board[r][c]){
					return true;
				}
			}
		}
	}

	return false;
}
function canMoveLeft(){
	// It goes through each row of the grid, one by one it checks whether there is a possible move left.
	for(let r = 0; r < rows ; r++){
		for( let c= 0; c < columns; c++){            
			if(board[r][c]!==0){
				if(board[r][c-1] === 0 || board[r][c-1] === board[r][c]){
					return true;
				}
			}
		}
	}

	return false;
}

document.addEventListener("keydown", numSlide);


//SlideDirection Function
function slideRight()
{
    for(let r=0;r<rows;r++)
    {
        //get row board
        let row = board[r];
        console.log(row);        
        row = slide(row);
        board[r] = row;        
    }
}
function slideLeft()
{
    for(let r=0;r<rows;r++)
    {
        //get row board
        let row = board[r];

        row = slide(row);

        board[r] = row;        
    }
}

//Exchange the position of 0;
function slide(row)
{    
    //[21,22,23,24,0]    
        for(let c=0;c<columns;c++)
        {
            console.log(row[c].toString());
            if((row[c].toString()==="0"))
            {
                console.log("Found");            
            }    
        }
    
    
}


// Declaring variables used for touch input
let startX = 0;
let startY =0;

// THis will listen to when we tocuh as screeb and assigns the x coordinate of that touch.
// coordinates of the first touch to the screen
document.addEventListener('touchstart', (e)=>{
	startX = e.touches[0].clientX;
	startY = e.touches[0].clientY;
})

document.addEventListener('touchmove', (e)=>{
	if(!e.target.className.includes("tile")){
		return
	}

	e.preventDefault(); //to disable the scrolling
}, {passive: false})

document.addEventListener('touchend', (e)=>{
	if(!e.target.className.includes("tile")){
		return
	}

	let diffX = startX - e.changedTouches[0].clientX;
	let diffY = startY - e.changedTouches[0].clientY;

	// We are going to check the direction whether it is in respect of x-axis or y-axis.
	// Movement will be in respect of the x-axis
	if(Math.abs(diffX) > Math.abs(diffY)){
		if(diffX>0 && canMoveLeft()){
			// slideLeft();
			
		}else if(diffX < 0 && canMoveRight()){
			// slideRight();
			
		}
	}else{
		if(diffY > 0 && canMoveDown()){
			// slideUp();
			
		}else if(diffY < 0 && canMoveUp()){
			// slideDown();
			
		}
	}

})