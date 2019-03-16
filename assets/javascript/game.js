var randomNumber
var playerScore
var yellowGem
var redGem 
var blueGem
var greenGem
var wins
var losses

$(document).ready(function() {

    function randomComputerNumber () {
        randomNumber =Math.floor(Math.random() * 102) + 19
        $(".scorecard").append(randomNumber);
    }
    
}
