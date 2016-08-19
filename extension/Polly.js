/*
Just draw a border round the document.body.
*/
document.body.style.border = "5px solid red";

console.log("Initialize background script");
window.setInterval(pollFunction, 5000);

function pollFunction() {
    console.log("background script");
	
}
