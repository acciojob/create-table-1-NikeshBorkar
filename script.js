function insert_Row() {
    // Get the table element by its ID
    const table = document.getElementById('sampleTable');

    // Create a new row element
    const newRow = table.insertRow(1); // Insert at index 1 to add to the top, below the header row

    // Create and append new cells to the row
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    // Set the text content for each cell
    cell1.textContent = 'New Cell1';
    cell2.textContent = 'New Cell2';
}
