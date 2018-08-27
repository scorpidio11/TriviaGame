

$(document).ready(function () {

    var targetNumber = Math.floor(Math.random() * 120 + 19); // random traget number 19-120
    var bt1 = Math.floor(Math.random() * 12 + 1);
    var bt2 = Math.floor(Math.random() * 12 + 1);
    var bt3 = Math.floor(Math.random() * 12 + 1);
    var bt4 = Math.floor(Math.random() * 12 + 1);


    // var crystalRandom = Math.floor(Math.random()*12+1);

    var total = 0;
    var win = 0;
    var lose = 0;
    var message = "";



    // 1. random number 19-120 show on the page on load & Apped random numbers to Crystal

    $("#targetNum").text(targetNumber);


    // <button1>

    //Event delegation    $(document).on("click", "#button1", function () 

    $("#button1").on("click", function () {


        $("#button1").append(bt1);
        console.log(bt1);

        total += bt1;
        $("#totalNum").text(total);

        if (total === targetNumber) {
            $("#message").text("YOU WON");
            $("#win").text(++win);


            // re assigning button do not use var  #
                $("#button1").empty();
            bt1 = Math.floor(Math.random() * 12 + 1);
            $("#button1").append(bt1);


            reset();
            console.log(bt2);

        }

        else if (total > targetNumber) {
            $("#message").text("YOU LOST");
            $("#lose").text(++lose);



               // re assigning button #
            $("#button1").empty();
            bt1 = Math.floor(Math.random() * 12 + 1);
            $("#button1").append(bt1);
            reset();
        }
    });



    // <button2>

    $("#button2").on("click", function () {


        $("#button2").append(bt2);
        console.log(bt2);

        total += bt2;
        $("#totalNum").text(total);



        if (total === targetNumber) {
            $("#message").text("YOU WON");
            $("#win").text(++win);



// re assigning button #
            $("#button2").empty();
            bt2 = Math.floor(Math.random() * 12 + 1);
            $("#button2").append(bt2);
            reset();
        }

        else if (total > targetNumber) {
            $("#message").text("YOU LOST");
            $("#lose").text(++lose);


// re assigning button #

            $("#button2").empty();
            bt2 = Math.floor(Math.random() * 12 + 1);
            $("#button2").append(bt2);
            reset();
        }

    });


    // <button3>

    $("#button3").on("click", function () {


        $("#button3").append(bt3);
        console.log(bt3);

        total += bt3;
        $("#totalNum").text(total);


        if (total === targetNumber) {
            $("#message").text("YOU WON");
            $("#win").text(++win);


            reset();

            $("#button3").empty();
            bt3 = Math.floor(Math.random() * 12 + 1);
            $("#button3").append(bt3);

        }

        else if (total > targetNumber) {
            $("#message").text("YOU LOST");
            $("#lose").text(++lose);


            reset();
            $("#button3").empty();
            bt3 = Math.floor(Math.random() * 12 + 1);
            $("#button3").append(bt3);
        }

    });

    // <button4>


    $("#button4").on("click", function () {


        $("#button4").append(bt4);
        console.log(bt4);

        total += bt4;
        $("#totalNum").text(total);



        if (total === targetNumber) {
            $("#message").text("YOU WON");
            $("#win").text(++win);

            reset();
            $("#button4").empty();
            bt4 = Math.floor(Math.random() * 12 + 1);
            $("#button4").append(bt4);
        }

        else if (total > targetNumber) {
            $("#message").text("YOU LOST");
            $("#lose").text(++lose);


            reset();
            $("#button4").empty();
            bt4 = Math.floor(Math.random() * 12 + 1);
            $("#button4").append(bt4);
        }

    });



    function reset() {

        $("#totalNum").empty();
        total = 0;
        $("#totalNum").text(total);

        console.log(total);

        $("#targetNum").empty();
        targetNumber = Math.floor(Math.random() * 120 + 19);


        $("#targetNum").text(targetNumber);
        console.log(targetNumber);

    }


});













