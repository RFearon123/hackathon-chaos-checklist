// make list
document.getElementById("submit-btn").addEventListener("click", submitItemsToChecklist); 
   
function submitItemsToChecklist() {

    const inputElement = document.getElementById("submission-area");
    const input = inputElement.value;

    if (input.trim() !== "" ) {
        const li = document.createElement("li");
        li.textContent = input;
   
     

        document.getElementById("display-list").appendChild(li);
        document.getElementById("submission-area").value = "";
       
}

} 
 
// IF empty stuff is submitted create li with string defeat final boss of monday

document.getElementById("submit-btn").addEventListener("click", randomTask)

function randomTask() {

  const inputElement = document.getElementById("submission-area");
  const input = inputElement.value;

  const displayList = document.getElementById("display-list");
  let li = document.createElement("li");


  if (input.trim() === "") {
    li.textContent = "Defeat the Final Boss of Monday";

  }

  else {
    li.textContent = input;
  }

   displayList.appendChild(li);
    inputElement.value = ""; // clear input
}
      


// Create a "close" button and apply it to each list item
const submit=document.getElementById("submit-btn");
function hideButton() {
    submit.classList.toggle("botton");
   // submit.style.backgroundColor = 
}

 



submit.addEventListener("click", hideButton);





console.log("hello");

const showRiddle=document.getElementById("submit-btn");
function display(){
    submit.classList.forEach("3");

}

