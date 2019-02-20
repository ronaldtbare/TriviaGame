$(document).ready(function () {

    var counterValue= 30;

    function counter(){
        counterValue--;
        console.log(counterValue);
        $(".timerText").text(counterValue);
        if (counterValue<1){
            return
        }

    }


    setInterval(counter,1000);

    














});