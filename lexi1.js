// where
/// let i = click count
/// click counter 

let fizzBuzzCounter = 1;
let button = document.getElementById("submit-btn");
let textchange = document.getElementById("display-list");



// what do 
function fizzBuzz() {
  fizzBuzzCounter +=1;

console.log(fizzBuzzCounter)
    if (fizzBuzzCounter % 3 === 0) {
        const li = document.createElement("li");
        li.textContent = "FIZZ";
        document.getElementById("display-list").appendChild(li);
        document.getElementById("submission-area").value = "";
       
      // dialog box appears
    } else if (fizzBuzzCounter % 5 === 0) {
        const li = document.createElement("li");
        li.textContent = "BUZZ"
        document.getElementById("display-list").appendChild(li);
        document.getElementById("submission-area").value = "";
  
      // text change

      //  textchange.classList.toggle("textsize");
     }
    // else {
    //   // console.log(i);
    // }
  }



// when

button.addEventListener("click", fizzBuzz);