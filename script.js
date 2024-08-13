function insert_Row() {
    //Write your code here
	let table = document.getElementById('sampleTable');
	let btn = document.querySelector('input');
	btn.addEventListener("click", addRow);
	//let btn = document.querySelector('input');
	//btn.addEventListener("click", addRow);

	function addRow(){
	//function addRow(){
		let row = table.insertRow(0);
		row.insertCell(0).innerHTML = "New Cell1";
		row.insertCell(1).innerHTML = "New Cell2";
	}
 
}
