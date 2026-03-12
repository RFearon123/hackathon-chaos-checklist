//where//

// const submit=document.getelementbyid("") 


const clickChecker = document.body;

let clickCounter = 0;

function toggleColour(){
    let ele = document.body;
   ele.classList.toggle("funkyColour")
}

function clickCount(){
 clickCounter +=1;
 console.log(clickCounter);
 
if(clickCounter === Math.floor(Math.random() * 10) + 1){
    toggleColour();
    clickCounter = 0;
}
}



//subButton.addEventListener("click", toggleColour);

clickChecker.addEventListener("click", clickCount);