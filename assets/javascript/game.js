

// Global variables

var jewel = {
    diamond:{
        value:0
    },
    emerald:{
        value: 0
    },
    ruby:{
        value:0
    }, 
    topaz:{
        value:0
    }
}
var currentScore = 0;
var targetScore = 0;

var wins = 0;
var losses = 0;


//functions

var getRandom = function(min, max){
    return Math.floor(Math.random()*(max - min + 1)) + min;

}

var startGame = function () {
    // reset current score
    currentScore = 0;
    // set a new target score between 19 - 120
    targetScore = getRandom(19,120);
    // set different values for each of the crystal b/w 1-12
    jewel.diamond.value     = getRandom(1,12);
    jewel.emerald.value     = getRandom(1,12);
    jewel.ruby.value        = getRandom(1,12);
    jewel.topaz.value       = getRandom(1,12);

    $("#totScore").html(currentScore);
    $("#targetScore").html(targetScore);

    // console.log("--------------")
    // console.log("target score: "+ targetScore)
    // console.log("jewel.diamond.value + "|"jewel.emerald.value +"|"jewel.ruby.value +"|"jewel.topaz.value")
    // console.log("--------------")
    // change the HTML to reflect  changes

}

var addValues = function(jewel){


    currentScore = currentScore + jewel.value;

    $("#totScore").html(currentScore);

    checkWin();

    console.log("your score; "+ currentScore);
}
var checkWin = function(){
    if(currentScore > targetScore){
        console.log("you lost");
        losses ++;
        $("#losses").html(losses);
    startGame();
    }
    else if (currentScore == targetScore){
    console.log("you won")
    wins ++;
    $("#wins").html(wins);
    startGame();
    }
}

startGame()

$("#diamond").click(function() {
    addValues(jewel.diamond);

});
$("#emerald").click(function() {
    addValues(jewel.emerald);
});
$("#ruby").click(function() {
    addValues(jewel.ruby);
});
$("#topaz").click(function() {
    addValues(jewel.topaz);
});
    
            
