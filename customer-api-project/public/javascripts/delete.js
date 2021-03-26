let deleteButtons = document.querySelectorAll('.delete');

deleteButtons.forEach(buttons => {
    buttons.addEventListener("click", handleDelete);
});


function handleDelete(e){
    e.preventDefault();
    const id = e.target.attributes[0].nodeValue;
    
    const option =  {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch("http://localhost:5000/customers/delete/" + id ,option)
      .then(response => { 
        location.reload();
      });
}