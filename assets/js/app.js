var timer = document.getElementById("timer");
var time = 60;
timer.textContent = time;

var interval = setInterval(function(){
    time--;
    timer.textContent = time;
    if (time === 0){
        clearInterval(interval);
        endGame();
    }
}, 1000);
var answers = [];
document.querySelector('button').addEventListener('click', function(){
    
});
function endGame() {

}
