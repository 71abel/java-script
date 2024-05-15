function countdownTimer(){
    let counter = 5;
    const timer = setInterval(() =>{
        counter--;
        console.log(counter+"s");
        if(counter===0){
            clearInterval(timer);
            console.log("Time's up!");
        }
    },1000);
}
countdownTimer();