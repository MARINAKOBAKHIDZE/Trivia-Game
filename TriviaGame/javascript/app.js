// $(document).ready(function ()
// var score; 
// score = 0;
// alert ("Welcome to the Game!");
// q1 = prompt("Who Played in the movie Cry Baby?");
// if (q1 == "Johnny Depp"){
// score ++;
//     alert ("Correct! your score is:" +score);   
// };
// else {
//     alert ("Wrong! your score is: " +score);
// }
// q2 = prompt("Which of these is Not a name of one of the Spice Girls?");
// if (q2 == "Spicy Spice"){
// score ++;
//     alert ("Correct! your score is:" +score);   
// }
// else {
//     alert ("Wrong! your score is: " +score);
// };
// var myVar = setInterval(function () {
//     myTimer()
// }, 1000);
// var secondlimit = 60;

// function myTimer() {
//     if (secondlimit == 0) {
//         myStopFunction();
//     }

//     document.getElementById("safeTimerDisplay").innerHTML = '00:' + zeroPad(secondlimit, 2);
//     secondlimit = secondlimit - 1;

// }

// function myStopFunction() {
//     clearInterval(myVar);
// }

// function zeroPad(num, places) {
//     var zero = places - num.toString().length + 1;
//     return Array(+(zero > 0 && zero)).join("0") + num;
// }
// $(".counter").text("timer: "+counter)
var counter=60;
var timer=setInterval(function (){
    counter--;
    $(".counter").text("timer: "+counter)
}, 1000);
// function timer(){
//     setInterval(function (){
//         counter--;
//         $(".counter").text("timer: "+counter)
//     }, 1000);  
// }
$(".stopTimer").on("click", function (){
    clearInterval(timer);
})
timer()