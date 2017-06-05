// ------ VARIABLES ------ //
var boxes = $('.gameboard div')
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ' ']
var emptyBox;

// ------ FUNCTIONS ------ //

// adds event listeners to all the boxes
for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', boxClickHandler)
}

// randomize the numbers array
function shuffle(numbers) {
  var currentIndex = numbers.length, temporaryValue, randomIndex;
  while (0 !==currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = numbers[currentIndex];
    numbers[currentIndex] = numbers[randomIndex];
    numbers[randomIndex] = temporaryValue;
  }
  return numbers;
}
numbers = shuffle(numbers);

// adds numbers to each div
$.each( numbers, function( i, val ) {
  $( ".gameboard div" ).eq(i).text(val);
});

// find the empty div
emptyBox = $(".tile:contains(' ')").css('background-color', 'maroon').css('border-color', 'black')

// empty = $('.class').filter(function() {
//   if ($(this).text() === " ") {
//     empty = $(".class:contains(' ')").css('background-color', 'blue')
//   }
// })


// controls what happens when each box is clicked
function boxClickHandler() {
  console.log("box has been clicked")
  
}
