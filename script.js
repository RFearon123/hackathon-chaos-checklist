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





console.log("ho");

/*const showRiddle=document.getElementById("submit-btn");
function display(){
    submit.classList.forEach("3");

} */

//delete button


document.getElementById("delete-btn").addEventListener("click", () => {
    document.querySelectorAll("*").forEach(el => {
        el.style.backgroundColor = "white";
        el.style.color = "white";
        el.style.borderColor = "white";
        el.style.boxShadow = "none";
    });
});

// Get the modal
