// ------- VARIABLES ------- //
var boxes = $('.gameboard div')
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, ' ']
var emptyBox;
var currentNumber;
var count = 0;
var gameTimer = 0;
var gameIntervalTimer;


// ------- FUNCTIONS ------- //

// adds event listeners to all the boxes
for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', boxClickHandler)
}

// controls the timer starting
function myTimer() {
  gameIntervalTimer = setInterval(function() {
    gameTimer++;
    $('.timer').text(gameTimer + ' seconds...')
  }, 1000);
}

// stops the timer *** currently not functioning properly
function timerStop() {
  clearInterval(gameIntervalTimer)
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
  numbers = shuffle(numbers);
}

// adds numbers to each div
$.each( numbers, function( i, val ) {
  $( ".gameboard div" ).eq(i).text(val);
});

// controls what happens when each box is clicked
function boxClickHandler() {
  currentNumber = $(this).text()
  // adds clicked number to emptyBox and removes emptyBox styling
  $(emptyBox).text(currentNumber)
  $(emptyBox).removeClass('emptyBox')
  // makes clicked tile blank and adds emptyBox styling
  $(this).text(' ')
  $(this).addClass('emptyBox')
  // makes emptyBox the current empty box
  emptyBox = $(".tile:contains(' ')")
  //console.log(currentNumber)
  if (checkDone()) {
    alert('congrats! your time was ' + gameTimer + " seconds!")
    playerOneTime = gameTimer
    timerStop()
  }
}

// randomize the board when start is clicked and begin the timer
$('.start').on('click', function(){
  shuffle(numbers)
  $.each( numbers, function( i, val ) {
    $( ".gameboard div" ).eq(i).text(val);
  });
  emptyBox = $(".tile:contains(' ')")
  emptyBox.addClass('emptyBox')
  myTimer()
})

// check to see if the puzzle has been completed
function checkDone() {
  var checkTileOne = boxes.eq(0).text() === "1";
  var checkTileTwo = boxes.eq(1).text() === "2";
  var checkTileThree = boxes.eq(2).text() === "3";
  var checkTileFour = boxes.eq(3).text() === "4";
  var checkTileFive = boxes.eq(4).text() === "5";
  var checkTileSix = boxes.eq(5).text() === "6";
  var checkTileSeven = boxes.eq(6).text() === "7";
  var checkTileEight = boxes.eq(7).text() === "8";
  var checkTileNine = boxes.eq(8).text() === " ";

  if (checkTileOne && checkTileTwo && checkTileThree && checkTileFour && checkTileFive && checkTileSix && checkTileSeven && checkTileEight && checkTileNine) {
    return true
  } else {
    return false
  }
}
