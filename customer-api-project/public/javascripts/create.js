document.getElementById("submit").addEventListener("click", handleSubmit);
const tableRows = document.getElementsByTagName("tr");
const inputs = document.getElementsByClassName("add-customer");

function handleSubmit(e){
    e.preventDefault();
    const newCustomer = {
      id: tableRows.length+1,
      first_name: inputs[0].value,
      last_name: inputs[1].value,
      email: inputs[2].value,
      gender: inputs[3].value,
      country: inputs[4].value,
      city: inputs[5].value,
    }
    
    const option =  {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCustomer)
    }
    fetch("http://localhost:5000/customers/add",option)
      .then(response => { 
        location.reload();
      });
}
