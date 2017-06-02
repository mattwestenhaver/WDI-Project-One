// ------ VARIABLES ------ //
var boxes = $('.gameboard div')



// ------ FUNCTIONS ------ //
for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', boxClickHandler)
}

function boxClickHandler() {
  console.log(boxes[i] + " has been clicked")
}
