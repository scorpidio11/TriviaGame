



 $(document).ready(function () {

        var n = 10;

        var win = 0;
        var loss = 0;
        var unanswered = 0;

        var userAnswer1;
        var userAnswer2;
        var userAnswer3;
        var userAnswers = [];
        var correctAnswerArray = ["1.4 kilograms", "Left", "1000 to 10000"];
        var endTime;


        // START BUTTON FUNCTION STARTS TIMER
        startBtnTimer();

        function startBtnTimer() {
            $('#startBtn').on('click', function (startTimerGoing) {

                // MAKE SCREEN DISAPPEAR
                $('#startBtn').css({
                    'display': 'none'
                });
                $('#triviaScreen').css({
                    'display': 'block'
                });
                $('#timerScreen').css({
                    'display': 'block'
                });

                $('#submit').css({
                    'display': 'block'
                });

                // START GAME FUNCTION
                countDown();
            });
        }

        // TIMER FUNCTION



        function countDown() {


            n--;
            if (n > 0) {
                endTime = setTimeout(countDown, 1000);
                $("#timerScreen").html('<h2> Time Left: ' + n + ' Seconds!</h2>');
            } else {

                // WHEN TIMER REACHES 0 STORE DATA: PUSH ANSWERS TO ARRAY, COMPARE ANSWERS TO CORRECT ANSWER 

                createArrayOfUserAnswers();
                compareArray();
                showScoreboard();


                // DISPLAY: REMOVE TRIVIA, SHOW SCORE


                $('#timerScreen').css({
                    'display': 'none'
                });


                $('#triviaScreen').css({
                    'display': 'none'
                });

            }

        };

        // GET VALUE OF ANSWER CLICKED

        $('.radioSelect1').on('click', function (storeTriviaBtnAnswer) {
            userAnswer1 = $('input[name="question1"]:checked').val();
        });

        $('.radioSelect2').on('click', function (storeTriviaBtnAnswer) {
            userAnswer2 = $('input[name="question2"]:checked').val();
        });

        $('.radioSelect3').on('click', function (storeTriviaBtnAnswer) {
            userAnswer3 = $('input[name="question3"]:checked').val();
        });

        // CREATE ANSWER ARRAY OF USER ANSWERS

        function createArrayOfUserAnswers() {
            userAnswers.push(userAnswer1);
            userAnswers.push(userAnswer2);
            userAnswers.push(userAnswer3);
            console.log(userAnswers);
        }

        // COMPARE TO ARRAY OF CORRECT ANSWERS AND ADD TO VALUE OF WIN / LOSS / UNANSWERED

        function compareArray() {

            //var userAnswersLength = userAnswers.length;

            for (var i = 0; i < userAnswers.length; i++) {
                if (correctAnswerArray[i] === userAnswers[i]) {
                    win++;
                } else if (userAnswers[i] === undefined) {
                    unanswered++;
                } else {
                    loss++;
                }
            }
        }

        // SHOW POINTS IN SCOREBOARD

        function showScoreboard() {

            $("#scoreBoard").html('<h2>All Done!</h2><h3>Wins: ' + win + '</h3> <h3>Losses: ' + loss + '</h3>' + '<h3>Unanswered: ' + unanswered + '</h3>');
            $('#scoreBoard').css({
                'display': 'block'
            });
            $('#submit').css({
                'display': 'none'
            });


        }


        //  FINISH TRIVIA BUTTON (SUBMIT BUTTON)

        $('#submit').on('click', function () {

            $('#triviaScreen').css({
                'display': 'none'
            });
            $('#timerScreen').css({
                'display': 'none'
            });

            $('#submit').css({
                'display': 'none'
            });


            createArrayOfUserAnswers();
            compareArray();
            showScoreboard();
            clearTimeout(endTime);


        })




    });





