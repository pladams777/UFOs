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
            let cell = row.append("td"); // add wach value as a table cell (td)
            cell.text(val);
            }
        );
    });
}
