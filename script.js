//Fetch the api data from the url
const urlData = "https://jsonplaceholder.typicode.com/posts";
fetch(urlData)
  .then((response) => response.json())
  .then((data) => {

    // Get the table body 
    let tableContent = document.getElementById("table-data");

    //To store the API data
    let content = "";

    // Loop to through the data and add table row
    for (let api of data) {
      content += `
        <tr>
        <td>${api.userId}</td>
        <td>${api.id}</td>
        <td>${api.title}</td>
        <td>${api.body}</td>
        </tr>`;
    }

    // Setting innerHTML as the table data to display the result
    tableContent.innerHTML = content;
  });
