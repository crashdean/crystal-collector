
        
        var randomNumber = ""
        var playerScore = 0
        var redGem = ""
        var purpleGem = ""
        var whiteGem = ""
        var greenGem = ""
        var wins = 0
        var losses = 0
        var winner = "Stop"

        function initializeCrystals() {
            playerScore = 0;

        $(".computer, .total, .gem1, .gem2, .gem3, .gem4").empty();
    }

        $(document).ready(function() {
    
            $("#random-button").click(function() {
                
                randomNumber = Math.floor(Math.random() * 102) + 19
                $(".computer").text(randomNumber);
                redGem = Math.floor(Math.random() * 12) + 1 
                purpleGem = Math.floor(Math.random() * 12) + 1 
                whiteGem = Math.floor(Math.random() * 12) + 1 
                greenGem = Math.floor(Math.random() * 12) + 1  
                playerScore = 0;
                $('.total').text(playerScore); 
                $('.gem1, .gem2, .gem3, .gem4').on('click')
            });

        

            

            $(".gem1").click(function() {
                 playerScore += redGem;
                 $(".total").text(playerScore)
                 checkScore();
            });

            $(".gem2").click(function() {
                 playerScore += purpleGem;
                $(".total").text(playerScore)
                checkScore();   
            });

            $(".gem3").click(function() {
                 playerScore += whiteGem;
                $(".total").text(playerScore)
                checkScore();   
            });

            $(".gem4").click(function() {
                 playerScore += greenGem;
                $(".total").text(playerScore)
                checkScore();
            });

            function checkScore() {
                if (playerScore > randomNumber) {
                    losses++;
                    $('.lose').text(losses);
                       
                }
                else if (playerScore === randomNumber) {
                    wins++;
                    $('.wins').text(wins);
                    
                    
                }
            }

        

            
                // function reset() {
                    // randomNumber = 0;
                    // playerScore = 0;
                    // $('.total').text(playerScore);
                    // $('.computer').text(randomNumber);
                    // $('.gem1, .gem2, .gem3, .gem4').text(playerScore);
                
            // }
        
        });