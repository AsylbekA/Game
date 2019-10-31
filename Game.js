
// Restart game button
var restart=document.querySelector('#b')

// Grab all the squares
var squares =document.querySelectorAll('td')

// Clear all the squares
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
      squares[i].textContent = '';
  }
}
restart.addEventListener('click',clearBoard)


// Check the clear marker

function changeMarker(){
    if(this.textContent === ''){
      this.textContent = 'X';
      // console.log(marker)
    }else if (this.textContent === 'X') {
      this.textContent = 'O';
    }else {
      this.textContent = '';
    }
};
// for loop to add event Listeners to all the square
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeMarker);
}
