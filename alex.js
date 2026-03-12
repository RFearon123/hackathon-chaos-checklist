//where//

// const submit=document.getelementbyid("") 


const clickChecker = document.body;

let clickCounter = 0;
let randomNum =  Math.floor(Math.random() * 10) + 1;
console.log("random number " + randomNum)




function randomNumber() {
  return Math.floor(Math.random() * 255 + 1);
}


function clickCount(){
 clickCounter +=1;
 
if(clickCounter === randomNum){
  let rgb1 = randomNumber();
  let rgb2 = randomNumber();
  let rgb3 = randomNumber();
  
  clickChecker.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;

    randomNum = Math.floor(Math.random() * 10) + 1;
    console.log("random number " + randomNum)
    // toggleColour();

    clickCounter = 0;
}
}




// function changeColour() {
 
// }
// function toggleColour(){
//     let ele = document.body;
//    ele.classList.toggle("funkyColour")
// }




//subButton.addEventListener("click", toggleColour);

clickChecker.addEventListener("click", clickCount);


