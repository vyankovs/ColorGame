
var numSquares = 6 ;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetBtn = document.getElementById('reset');
var modeBtns = document.querySelectorAll(".mode");

for (var i=0; i<modeBtns.length; i++){
    modeBtns[i].addEventListener('click', function(){
        modeBtns[0].classList.remove("selected");
        modeBtns[1].classList.remove("selected");
        this.classList.add ("selected");
        this.textContent === "Easy" ? numSquares=3 : numSquares = 6;
    
        reset();
    })
}

function reset(){
    colors = generateRandomColors(numSquares);
    //pick new random color from array
    pickedColor = pickColor();
    //change colorDisplay
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetBtn.textContent = "New colors";
    //change colors of squares
    for (var i = 0; i< squares.length; i++){
        //set initial colors to squares
        if (colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        h1.style.backgroundColor = 'steelblue';
}}

/*easyBtn.addEventListener('click', function(){
    numSquares = 3;
easyBtn.classList.add ( "selected");
hardBtn.classList.remove ("selected");
colors = generateRandomColors(numSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
for (var i =0; i<squares.length; i++){
if(colors[i]){
    squares[i].style.backgroundColor = colors[i];
} else {squares[i].style.display = 'none'
}

}

});

hardBtn.addEventListener('click', function(){
    numSquares = 6;
    hardBtn.classList.add ("selected");
    easyBtn.classList.remove ("selected");
    colors = generateRandomColors(numSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
for (var i =0; i<squares.length; i++){

    squares[i].style.backgroundColor = colors[i];
 squares[i].style.display = 'block'
}});*/

resetBtn.addEventListener ('click', function(){
    reset();
} )

colorDisplay.textContent = pickedColor;

for (var i = 0; i< squares.length; i++){
    //set initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener('click',function(){
        //grab color of picked square
var clickedColor =  this.style.backgroundColor
//compare color to pickedColor
if (clickedColor=== pickedColor){
    messageDisplay.textContent = "Correct!";
    changeColors(clickedColor);
    h1.style.backgroundColor = clickedColor;
    resetBtn.textContent = "Play again?"
} else {
   this.style.backgroundColor = '#232323';
   messageDisplay.textContent = "Try again!";

}
    });

}

function changeColors(color){
for (var i = 0; i<squares.length; i++){
    //change all squares' color
  squares[i].style.backgroundColor = color;  
}
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
//make un array
var arr = [];
//add num random colors to array
for (var i=0; i<num; i++){
arr.push(randomColor())
}
//return that array
return arr;
}

function randomColor(){
    //pick red from 0 to 255
   var r = Math.floor(Math.random()*256);
    //pick green from 0 to 255
    var g = Math.floor(Math.random()*256);
    //pick blue from 0 to 255
    var b = Math.floor(Math.random()*256);

    return "rgb("+r+", "+g+", "+b+")";
}