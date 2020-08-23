// from data.js
var tableData = data;

// select tbody
var tbody = d3.select("tbody");
console.log("stage 1");

// loop through table and append each table row along with its data
function displayData(ufoSightings){
    tbody.text("");
    ufoSightings.forEach(function(ufo_data){
    new_tr = tbody.append("tr");
    Object.entries(ufo_data).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value);
    });
    });
}

// display table data and mark point in the console
displayData(tableData);
console.log("stage 2");

// select the submit button
var submit = d3.select("#submit");

submit.on("click", function() {
    console.log("stage 3");

  // Stop the page from refreshing
  d3.event.preventDefault();

  // Select the input element and retrieve the table header titles from the index.html code
  var dateInput = d3.select("#datetime");
  var cityInput = d3.select("#city");
  var stateInput = d3.select("#state");
  var countryInput = d3.select("#country");
  var shapeInput = d3.select("#shape");

  // Retrieve the value property using the input variables
  console.log(dateInput.property("value"));
  console.log(cityInput.property("value"));
  console.log(stateInput.property("value"));
  console.log(countryInput.property("value"));
  console.log(shapeInput.property("value"));

  // Create a variable to filter the table 
  var filtered = tableData.filter(ufo_data =>{
    return (ufo_data.datetime===dateInput.property("value") || !dateInput.property("value") ) &&
               (ufo_data.city===cityInput.property("value") || !cityInput.property("value") ) &&
               (ufo_data.state===stateInput.property("value") || !stateInput.property("value") ) &&
               (ufo_data.country===countryInput.property("value") || !countryInput.property("value") ) &&
               (ufo_data.shape===shapeInput.property("value") || !shapeInput.property("value") ) 
  });

  // update the data by activating the 'filtered' variable
  displayData(filtered);
});

// select '.form-control' from style.css code
var filterInputs = d3.selectAll('.form-control');

// clears input fields and objects
function clearEntries() {
    filters = {};

    // Sets every input field to 0
    filterInputs._groups[0].forEach(entry => {
        if (entry.value != 0) {
            d3.select('#' + entry.id).node().value = "";
        };
    });
};

// Select clear button
var clearButton = d3.select("#clear");
// Clear button on click clears fields
clearButton.on('click', function() {

    // Stop the whole page from regreshing and only the table
    d3.event.preventDefault();
    // Clear input fields
    clearEntries();
});






