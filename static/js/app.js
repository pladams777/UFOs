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

// create a function to filter data
function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData; // set default filter as original data
    if (date) {  // if a date is entered
        filteredData = filteredData.filter(row => row.datetime === date); //filter to show only data from the date entered
    };
    buildTable(filteredData);   // Rebuild the table using the filtered data otherwise just original tableData
}    
d3.selectAll("#filter-btn").on("click", handleClick); // listen for click

// Build the table when the page loads
buildTable(tableData);