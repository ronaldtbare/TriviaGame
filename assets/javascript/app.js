$(document).ready(function () {

    function timer() {
        var counterValue = 15;
        $(".timerText").text(counterValue);
        function counter() {
            counterValue--;
            console.log(counterValue);
            $(".timerText").text(counterValue);
            if (counterValue <= 0) {
                clearInterval(countdown);
            }

        }

        var countdown = setInterval(counter, 1000);
    }


    function showCorrect() {
        $("#question").text("CORRECT!");
        $("#answer1").text("");
        $("#answer2").text("");
        $("#answer3").text("");
        $("#answer4").text("");

    }

    function showIncorrect() {
        $("#question").text("Incorrect.");
        $("#answer1").text("");
        $("#answer2").text("");
        $("#answer3").text("");
        $("#answer4").text("");
    }

    function displayQuestion1() {

        var question1 = {
            question: "What was the suit color of the Greatest American Hero?",
            answers: ["red", "green", "blue", "orange"]
        };
        $("#question").text(question1.question);
        $("#answer1").text(question1.answers[0]);
        $("#answer2").text(question1.answers[1]);
        $("#answer3").text(question1.answers[2]);
        $("#answer4").text(question1.answers[3]);
        timer();
       
        $("#answer1").click(function(){
            showCorrect();
            setTimeout(displayQuestion2,5000);
        });

        $("#answer2").click(function(){
            showIncorrect();
            setTimeout(displayQuestion2,5000);
        });

        $("#answer3").click(function(){
            showIncorrect();
            setTimeout(displayQuestion2,5000);
        });

        $("#answer4").click(function(){
            showIncorrect();
            setTimeout(displayQuestion2,5000);
        });
    }

    function displayQuestion2() {

        var question2 = {
            question: "What was the game for Atari 2600 based on Raiders of the Lost Ark?",
            answers: ["Sidewinder", "Alpha Lock", "Pitfall", "Raiders"]
        };
        $("#question").text(question2.question);
        $("#answer1").text(question2.answers[0]);
        $("#answer2").text(question2.answers[1]);
        $("#answer3").text(question2.answers[2]);
        $("#answer4").text(question2.answers[3]);
        timer();
    }

    displayQuestion1();
    setTimeout(displayQuestion2, 10000);












});