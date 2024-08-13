function insert_Row() {
     // Get the table element by its ID
    let table = document.getElementById("sampleTable");

    // Insert a new row at the top of the table (index 0)
    let newRow = table.insertRow(0);

    // Insert the first cell in the new row
    let newCell1 = newRow.insertCell(0);
    // Set the text content of the first cell
    newCell1.textContent = "New Cell1";

    // Insert the second cell in the new row
    let newCell2 = newRow.insertCell(1);
    // Set the text content of the second cell
    newCell2.textContent = "New Cell2";
}
