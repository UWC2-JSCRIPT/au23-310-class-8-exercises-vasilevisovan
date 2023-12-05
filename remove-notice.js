const maintaneceRemoveNoticeElement = document.getElementById('maintenance-notice');
const removeNoticeElement = function() {
    maintaneceRemoveNoticeElement.classList.add('d-none');
}
setTimeout(removeNoticeElement, 2000);

/*
let secondsRemaining = 5;

let countDown = setInterval(function(){
    secondsRemaining--;
    console.log(secondsRemaining)
    if(secondsRemaining===0){
       
        // I have observed that using '"clearTimeout" 
        //instead of "clearInterval" works the same
        //for this particular exemple
       
       
        clearInterval(countDown)
        console.log('Time is up');
    }
}, 1000); */

