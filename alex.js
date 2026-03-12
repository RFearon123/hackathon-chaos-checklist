//where//

// const submit=document.getelementbyid("") 

let imageChange = document.getElementById("ducks");
imageChange.style.display = "none";
const clickChecker = document.body;

let clickCounter = 0;

let imgCounter = 0;
let randomNum =  Math.floor(Math.random() * 10) + 1;
console.log("random number " + randomNum)




function randomNumber() {
  return Math.floor(Math.random() * 255 + 1);
}


function clickCount(){
 clickCounter +=1;
 imgCounter +=1;

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
if(imgCounter === 10)
{
    imgCounter = 0;
    changeImage();
}
}


function changeImage(){
    imageChange.style.display = "block";
 imageChange.src = "duck-river.jpg";
window.setTimeout(hideImage, 5000)

}
function hideImage(){
 imageChange.style.display = "none"
}

// function changeColour() {
 
// }
// function toggleColour(){
//     let ele = document.body;
//    ele.classList.toggle("funkyColour")
// }




//subButton.addEventListener("click", toggleColour);

clickChecker.addEventListener("click", clickCount);


