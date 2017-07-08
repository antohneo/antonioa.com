var numSquares = 12;
var colors = [];
var goalColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
var p = document.querySelector("p");
var resetButton = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init(){
    // mode button event listener
    setupModeBtns(); 
    // squares initilizing
    setupSquares();
    reset();

}

function setupModeBtns(){
    for (var i = 0; i < modeBtn.length; i++) {
        modeBtn[i].addEventListener("click", function(){
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            modeBtn[2].classList.remove("selected"); 
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numSquares = 4;
            }
            else if (this.textContent === "Medium") {
                numSquares = 8;
            }
            else {
                numSquares = 12;
            }
            reset();
        })
    }
}

function setupSquares(){
    for (var i = 0; i < squares.length; i++) {
        // add click listener to squares
        squares[i].addEventListener("click", function(){
            // select color of picked square
            pickedColor = this.style.backgroundColor;
            // compare goalColor to pickedColor
            if (pickedColor === goalColor) {
                messageDisplay.textContent = "Correct!"
                victory(pickedColor);
                h1.style.backgroundColor = goalColor;
                h2.style.backgroundColor = goalColor;
                p.style.backgroundColor = goalColor;
                resetButton.textContent = "Play again?"
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again."
            }
        })
    }
}

resetButton.addEventListener("click", function(){
    reset();
})


function victory(color){
    // loop through squares
    for (var i = 0; i < squares.length; i++) {
        // change color to match goalColor
        squares[i].style.backgroundColor = color;
    }
}

function randomGoal(){
    var rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
}

function generateRandomColors(num){
    // make array
    var arr = [];
    // add num random colors to array
    for(i = 0; i < num; i++){
        // get random color and push into array
        arr.push(randomColor());
    }
    // return array
    return arr;
}

function randomColor(){
    // pick red value 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick green value 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick blue value 0 - 255
    var b = Math.floor(Math.random() * 256);
    // color string
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset(){
    // generate new colors
    colors = generateRandomColors(numSquares);
    // pick new random color
    goalColor = randomGoal();
    // change color display to match picked color
    colorDisplay.textContent = goalColor;
    // change colors of squares
    for (i = 0; i < squares.length; i++){
        squares[i].style.display = "block";
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];            
        }
        else{
            squares[i].style.display = "none";
        }
    }
    // reset header background
    h1.style.backgroundColor = "rgb(48, 48, 48)";
    h2.style.backgroundColor = "rgb(48, 48, 48)";
    p.style.backgroundColor = "rgb(48, 48, 48)";
    // remove message
    messageDisplay.textContent = "";
    // update button text
    resetButton.textContent = "New colors";     
}