// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h3>JS Starter</h3>`;
// Create a xhttp object
var xhttp = new XMLHttpRequest();
//Opem
xhttp.open('GET', 'https://jsonplaceholder.typicode.com/posts');
// send request
xhttp.send();
// Get the response once resolved
xhttp.onload = function () {
  let res = this.responseText;
  console.log(res);
};
