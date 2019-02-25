$(document).ready(function () {
   
// Global variables
    var countdown;
    var questionCounter = 0;
    var number = 1;

//Questions

var questions = [
    {question: "What was the suit color of the Greatest American Hero?",
    answers: ["red", "green", "blue", "orange"],
    rightAnswer: "red",
    pic: "assets/images/hero.jpg"},

    {question: "What was the game for Atari 2600 based on Raiders of the Lost Ark?",
    answers: ["Sidewinder", "Alpha Lock", "Pitfall", "Raiders"],
    rightAnswer: "Pitfall",
    pic: "assets/images/pitfall.jpg"},        

    {question: "What was the tv show that featered a private eye that lived in Hawaii?",
    answers: ["Wonder Years", "Rosanne", "Lasiter", "Magnum P.I."],
    rightAnswer: "Magnum P.I.",
    pic: "assets/images/magnum.jpg"},

]
    

    function timer() {
        
        clearInterval(countdown);
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
        countdown = setInterval(counter, 1000);
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

    function displayQuestion(number) {

        

        var holder = questions[number];
            // console.log(questions[number].question);
            // console.log(number);
            // console.log(holder.question);

        // display question and answers
        $("#question").text(holder.question);
        $("#answer1").text(holder.answers[0]);
        $("#answer2").text(holder.answers[1]);
        $("#answer3").text(holder.answers[2]);
        $("#answer4").text(holder.answers[3]);
        
        //start timer
        timer();

        //evaluate selection
       var correctAnswer = holder.rightAnswer;
        $(".answers").on("click", function(){
            console.log("answer was clicked. correct answer is " + correctAnswer);
            $(".timerText").text("");
            if ( $(this).text() === correctAnswer){
                showCorrect();
                console.log("IS "+ correctAnswer);
                $(".answersCol").empty().append("<h2>The correct answer is: "+correctAnswer+"</h2>");
                $(".answersCol").append("<img src="+holder.pic+">");
              
               
            }

            else{
                showIncorrect();
                console.log("NOT "+ correctAnswer);
                $(".answersCol").empty().append("<h2>The correct answer is: "+correctAnswer+"</h2>");
                $(".answersCol").append("<img src="+holder.pic+">");
                
                
            }

            
        });
    }


//main



    displayQuestion(questionCounter);

 








});