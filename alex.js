//where//

// const submit=document.getelementbyid("") 


const clickChecker = document.body;

let clickCounter = 0;
let randomNum =  Math.floor(Math.random() * 10) + 1;
console.log("random number " + randomNum)
function toggleColour(){
    let ele = document.body;
   ele.classList.toggle("funkyColour")
}

function clickCount(){
 clickCounter +=1;
 
if(clickCounter === randomNum){
    randomNum = Math.floor(Math.random() * 10) + 1;
    console.log("random number " + randomNum)
    toggleColour();

    clickCounter = 0;
}
}



//subButton.addEventListener("click", toggleColour);

clickChecker.addEventListener("click", clickCount);


