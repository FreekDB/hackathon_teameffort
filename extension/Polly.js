/**
 * TOPdesk hackathon Delft 2016 summer.
 * Group: team effort
 * FireFox web extension to initiate TOPbreak.
 */


/*
Just draw a border round the document.body.
*/
document.body.style.border = "5px solid red";


console.log("Polly 2016-08-19 12:10 has started.");

console.log("Initialize background script.");
window.setInterval(pollFunction, 2000);

var firstTime = true;

function pollFunction() {
	if (firstTime) {
		console.log("Background script: open a new window...");
		
		var url = "pc1935:8080/TOPspin/index.html";
		//var url = "http://www.nrc.nl/sectie/wetenschap/";
		
		window.open(url, "TOPbreak time!", "menubar,resizable,scrollbars,status");
		
		firstTime = false;
	}
}
