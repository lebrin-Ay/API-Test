// // const urlData = "https://jsonplaceholder.typicode.com/posts";
// // fetch(urlData)
// //   .then((response) => response.json())
// //   .then((json) => {

    
// // api url
// const api_url = 
// "https://jsonplaceholder.typicode.com/posts";

// // Defining async function
// async function getApi(url) {

// // Storing response
// const response = await fetch(url);

// // Storing data in form of JSON
// var data = await response.json();
// console.log(data);
// if (response) {
//   hideloader();
// }
// show(data);
// }
// // Calling that async function
// getApi(api_url);

//     //To display the data via HTML
//     function displayData() {
//       //To store the HTML table headers
//       let table = `
//         <tr>
//         <th>userID</th>
//         <th>id</th>
//         <th>title</th>
//         <th>body</th>
//         </tr>`;
//     }
//     // displayData()

//     let data = '';
//     let table = ''
//     for (let i = 0; i < data.length; i++) {
//         table += `<tr>
//         <td>${data.userID}</td>
//         <td>${data.title}</td>
//         <td>${data.body}</td>
//         </tr>`;
//     }; 

//     document.getElementById("table-data").innerHTML = table;

// });


// // //Get the data from the API using the variable urlData
// // async function apiData(urlData) {
// //   const response = await fetch(urlData);

// //   let data = await response.json();

// //   console.log(data);
// // }
// // apiData(urlData);

// // fetch('https://jsonplaceholder.typicode.com/posts')
// //    .then(response => response.json)


// api url
const api_url =
	"https://jsonplaceholder.typicode.com/posts";

// Defining async function
async function getApi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getApi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>userID</th>
		<th>id</th>
		<th>title</th>
		<th>body</th>
		</tr>`;
	
	// Loop to access all rows
	for (let r of data.list) {
		tab += `<tr>
	<td>${r.userID} </td>
	<td>${r.id}</td>
	<td>${r.title}</td>
	<td>${r.body}</td>		
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("table-data").innerHTML = tab;
}




