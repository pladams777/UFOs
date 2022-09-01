// import the data from data.js
const tableData = data;

// reference the HTML table using D3
var tbody = d3.select("tbody");

// create function to build table
function buildTable(data) {
  tbody.html("") //clear out existing data
  data.forEach((dataRow) => { // use forEach to iterate throught the data
    let row = tbody.append("tr"); //append a row to the table body
    Object.values(dataRow).forEach((val) => { // loop through each field in the dataRow and
      let cell = row.append("td"); // add each value as a table cell (td)
      cell.text(val);
      }
    );
  });
}

var filters  = {}; // 1. Create a variable to keep track of all the filters as an object.

function updateFilters() { // 3. Use this function to update the filters. 
  let changedElement = d3.select(this); // 4a. Save the element that was changed as a variable.
  let elementValue = changedElement.property("value"); // 4b. Save the value that was changed as a variable.
  console.log(elementValue);
  let filterId = changedElement.attr("id"); // 4c. Save the id of the filter that was changed as a variable.
  console.log(filterId);
 
  if (elementValue) {
    filters[filterId] = elementValue; // 5. If a filter value was entered then add that filterId and value to the filters list.
  }
  else {
    delete filters[filterId]; //  Otherwise, clear that filter from the filters object.
  }

  filterTable(); // 6. Call function to apply all filters and rebuild the table
}
  
function filterTable() { // 7. Use this function to filter the table when data is entered.
    let filterData = tableData;  // 8. Set the filtered data to the tableData.
    Object.entries(filters).forEach(([key,value]) => { // 9. Loop through all of the filters and keep any data that
      filterData = filterData.filter(row => row[key]=== value); // matches the filter values
    });
 
    buildTable(filterData); // 10. Finally, rebuild the table using the filtered data
}
  
d3.selectAll("input").on("change", updateFilters); // 2. Attach an event to listen for changes to each filter
  
buildTable(tableData); // Build the table when the page loads
