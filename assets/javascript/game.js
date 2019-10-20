
    


    $(document).ready(function(){
    var randNumber = 0
    var diamond = 0
    var emerald = 0
    var ruby = 0
    var topaz = 0
   var randNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    $('#randNum').html(randNumber);

    var diamond = Math.floor(Math.random() * 12) + 1;
    var emerald = Math.floor(Math.random() * 12) + 1;
    var ruby = Math.floor(Math.random() * 12) + 1;
    var topaz = Math.floor(Math.random() * 12) + 1;

   
    var losses = 0;  

    var totScore = 0;
    $('#totScore').text(totScore);

    function win() {
        wins = wins + 1;
        $('#wins').text(wins);
    }

    function lose() {
        losses = losses + 1;
        $('#losses').text(losses);
        
    }
    // working
    // console.log(randNumber); 

  
    function reset() {
        totScore = 0;
        $('#totScore').text(totScore);
    }

    
});