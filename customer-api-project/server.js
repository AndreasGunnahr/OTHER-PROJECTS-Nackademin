var express = require('express');
var cors = require('cors')
var fs = require('fs');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const port = 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


/* Show all customers page */
app.get('/customers', function(req, res, next) {
    let customers = readFile();
    res.send(customers);
});

/* Add new customer to our JSON file */
app.post('/customers/add', function(req, res, next) {
    let customers = readFile();
    customers.push(req.body)
    let jsonContent = JSON.stringify(customers);
    writeFile(jsonContent);
  
    res.json({
        status: "success"
    })
});

/* Delete the picked customer from our JSON file */
app.delete('/customers/delete/:id', function(req,res,next){
    let customers = readFile();
    let deleteID = req.params.id;
     // As you have only Id of the object, we want to get the entire object from the array. find() will fetch the object from the array whose id is equal to deleteId and assign it to deleteObj.
    let deleteObject = customers.find(customer => customer.id == deleteID);
    //Find the index of the object fetched from the JSON array.
    let deleteObjectIndex = customers.indexOf(deleteObject); 
    // Remove the object from the JSON Array.
    customers.splice(deleteObjectIndex,1); 
    let jsonContent = JSON.stringify(customers);
    writeFile(jsonContent);
    res.json({
        status: "success"
    })
});

/* Editing our picked customer and then deleting the old information. Then insert the new customer object with the new data */
app.put('/customers/edit', function(req,res,next){
    const customers = readFile();
    let editID = req.body.id;
    let editObject = customers.find(customer => customer.id == editID);
    let editObjectIndex = customers.indexOf(editObject); 
    customers.splice(editObjectIndex, 1, req.body);
    let jsonContent = JSON.stringify(customers);
    writeFile(jsonContent);
    res.json({
        status: "success"
    })
});

/* Checking if the search on the client contains any valid data or not. */
app.post('/customers/search/:title', function(req,res,next){
    const customers = readFile();
    let searchParam = req.params.title.toUpperCase();
    let searchObjects = customers.filter(customer => {
        for(let x = 0; x <= searchParam.length; x++){
            if(customer.first_name.toUpperCase().substring(0,x) == searchParam){
                return customer;
            } 
        }
    });
    console.log(searchObjects)
    res.json({
        searchValues: searchObjects
    })
    
})

/*  Writing our new customer data to our JSON file.  */
const writeFile = (jsonContent) => {
    fs.writeFile('./MOCK_DATA.json', jsonContent, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    });
}

const readFile = () => {
    let readJSON = fs.readFileSync("./MOCK_DATA.json");
    let customers = JSON.parse(readJSON);
    return customers;
}