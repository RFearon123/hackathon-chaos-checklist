// make list
// IF empty stuff is submitted create li with string defeat final boss of monday
document.getElementById("submit-btn").addEventListener("click", submitItemsToChecklist);

function submitItemsToChecklist() {
    const inputElement = document.getElementById("submission-area");
    const input = inputElement.value.trim(); // Trim spaces early
    const displayList = document.getElementById("display-list");

    // Create a new li element
    const li = document.createElement("li");

    // Check if input is empty
    if (input !== "") {
        li.textContent = input;
    } else {
        li.textContent = "Defeat the Final Boss of Monday";
    }

    // Append li to the list and clear input
    displayList.appendChild(li);
    inputElement.value = "";
}

 
      


// Create a "close" button and apply it to each list item
const submit=document.getElementById("submit-btn");
function hideButton() {
    submit.classList.toggle("botton");
   // submit.style.backgroundColor = 
}

 



submit.addEventListener("click", hideButton);





console.log("hoop");

const showRiddle=document.getElementById("submit-btn");
function display(){
    submit.classList.forEach("3");

}

// if delete button pressed webpage go white/ black, body maybe fade 

document.getElementById("delete-btn").addEventListener("click", () => {
    const overlay = document.getElementById("whiteningDeletion");
    overlay.style.opacity = "1";
    setTimeout(() => {
        document.body.innerHTML = ""; // page fully blank
    }, 1500); // match the transition duration
});

