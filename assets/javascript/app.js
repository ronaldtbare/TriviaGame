$(document).ready(function () {

    // Global variables
    var countdown;
    var correctAnswer;
    var holder;
    
    var questionsCorrect = 0;
    var questionsIncorrect = 0;
    var arrayItemNumber = 0;

    //Questions

    var questions = [
        {
            question: "What was the suit color of the Greatest American Hero?",
            answers: ["red", "green", "blue", "orange"],
            rightAnswer: "red",
            pic: "assets/images/hero.jpg"
        },

        {
            question: "What was the game for Atari 2600 based on Raiders of the Lost Ark?",
            answers: ["Sidewinder", "Alpha Lock", "Pitfall", "Raiders"],
            rightAnswer: "Pitfall",
            pic: "assets/images/pitfall.jpg"
        },

        {
            question: "What was the tv show that featered a private eye that lived in Hawaii?",
            answers: ["Wonder Years", "Rosanne", "Air Wolf", "Magnum P.I."],
            rightAnswer: "Magnum P.I.",
            pic: "assets/images/magnum.jpg"
        },

        {
            question: "What was the music band the had the hit song 'Walk Like An Egyptian?",
            answers: ["Flock of Seagulls", "Bangles", "Men At Work", "J.Giles Band"],
            rightAnswer: "Bangles",
            pic: "assets/images/bangles.jpg"
        },

        {
            question: "What popular article of clothing had the brand name Members Only?",
            answers: ["hat", "jacket", "jeans", "shoes"],
            rightAnswer: "jacket",
            pic: "assets/images/jacket.jpg"
        },
    ]

    function showCorrect() {

        questionsCorrect++;
        $("#question").text("CORRECT!");
        $("#answer1").text("The correct answer is " + correctAnswer);
        $("#answer2").text("");
        $("#answer3").text("");
        $("#answer4").text("");
        $(".imageCol").append("<img class='image' src=" + holder.pic + ">");
        delay();

    }

    function showIncorrect() {
        questionsIncorrect++;
        $("#question").text("Incorrect.");
        $("#answer1").text("The correct answer is " + correctAnswer);
        $("#answer2").text("");
        $("#answer3").text("");
        $("#answer4").text("");
        $(".imageCol").append("<img class='image' src=" + holder.pic + ">");
        delay();

    }

    function delay() {
        setTimeout(function () {
            displayQuestion();
        }, 2000);
    }

    function showSummary() {
        $(".timerLabel").empty();
        clearInterval(countdown);
        $("#question").text("Score Time");
        $("#answer1").text("");
        $("#answer2").text("CORRECT answers: " + questionsCorrect);
        $("#answer3").text("INCORRECT answers: " + questionsIncorrect);
        $("#answer4").text("Score: " + questionsCorrect * 100 + "pts");
        $(".image").remove();
        
    }

    function displayQuestion() {
        
        $(".image").remove();
        $(".button").remove();

        if (arrayItemNumber > questions.length-1) {
            showSummary();
        }
        console.log("arrayItemNumber: " + arrayItemNumber);
      
        //start timer

        clearInterval(countdown);
        var counterValue = 10;
        $(".timerText").text(counterValue);
        function counter() {

            counterValue--;
            $(".timerText").text(counterValue);
            if (counterValue <= 0) {
                clearInterval(countdown);
                // showIncorrect();
                // delay();
            }
        }
        countdown = setInterval(counter, 1000);

        holder = questions[arrayItemNumber];

        console.log(holder);
        
        // display question and answers
        $("#question").text(holder.question);
        $("#answer1").text(holder.answers[0]);
        $("#answer2").text(holder.answers[1]);
        $("#answer3").text(holder.answers[2]);
        $("#answer4").text(holder.answers[3]);
        
        //evaluate selection
        correctAnswer = holder.rightAnswer;
        console.log("correct answer is "+correctAnswer);
        $(".answers").on("click", function () {

            if ($(this).text() === correctAnswer && counterValue >0) {
               
                showCorrect();
            }

            else {
               
                showIncorrect();
            }

        });
        
        arrayItemNumber++;
        console.log("correct ",questionsCorrect);
        console.log("incorrect ",questionsIncorrect);
        
    }

   
    //main

    $(".button").on("click", function () {
        

        displayQuestion();


    })


});