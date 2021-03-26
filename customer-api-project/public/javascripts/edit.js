let editButtons = document.querySelectorAll('.edit');
let closeButton = document.getElementById("close");
let confirmButton = document.getElementById("edit");
let editInput = document.querySelectorAll(".edit-customer");
let editContainer = document.getElementsByClassName("edit-container")[0];
let clickedRowID;

/* Adding eventlistener to our edit buttons on the customer list page. */
editButtons.forEach(buttons => {
    buttons.addEventListener("click", (e) => {
        editContainer.style.display = "flex";
        clickedRowID = e.target.attributes[0].nodeValue;
        let editRow = document.getElementById(clickedRowID);
        editInput[0].value = editRow.children[1].innerHTML;
        editInput[1].value = editRow.children[2].innerHTML;
        editInput[2].value = editRow.children[3].innerHTML;
        editInput[3].value = editRow.children[4].innerHTML;
        editInput[4].value = editRow.children[5].innerHTML;
        editInput[5].value = editRow.children[6].innerHTML;
    });
});

/* Adding eventlistener to our close button */
closeButton.addEventListener("click", () => {
    editContainer.style.display = "none";
});

/* Adding eventlistener to our confirm changes button */
confirmButton.addEventListener("click", handleEdit);



/* If the user confirm changes, we sending the data to the server */
function handleEdit(e){
    e.preventDefault();
    const editCustomer = {
        id: clickedRowID,
        first_name: editInput[0].value,
        last_name: editInput[1].value,
        email: editInput[2].value,
        gender: editInput[3].value,
        country: editInput[4].value,
        city: editInput[5].value,
      }
    
    const option =  {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editCustomer)
    }

    fetch("http://localhost:5000/customers/edit" ,option)
      .then(response => { 
        location.reload();
      });
}