/* rebecca code
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


rebecca code where what do  why*/


console.log("hello");
