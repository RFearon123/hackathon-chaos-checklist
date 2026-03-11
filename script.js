/* rebecca code*/
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


 
// Create a "close" button and append it to each list item
/*let displayListItems = document.getElementsByTagName("LI");
let i;
for (i = 0; i < displayListItems.length; i++) {
  let span = document.createElement("span");
span.textContent = "×";
  span.className = "close";
 
  displayListItems[i].appendChild(span);

}
  */
 









console.log("hello");
