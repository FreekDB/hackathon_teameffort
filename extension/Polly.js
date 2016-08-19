/**
 * TOPdesk hackathon Delft 2016 summer.
 * Group: team effort
 * FireFox web extension to initiate TOPspin.
 */


// Just draw a border round the document.body.
document.body.style.border = "5px solid red";


// A few (timing) constants.
var productionMode = true;
var spinIntervalSeconds = 20;
var spinOffset = spinIntervalSeconds / 10;
var pollInterval = (spinOffset * 1000) / 4;


// Let's get started.
console.log("Polly 2016-08-19 14:46 has started.");
console.log("Initialize background script.");
window.setInterval(pollFunction, pollInterval);


// Used in development mode to only get one invitation window.
var firstTime = true;

function pollFunction() {
	if (productionMode || firstTime) {
		var dateTime = new Date();
		var secondsInHour = 60 * dateTime.getMinutes() + dateTime.getSeconds();
		var secondsModulo = secondsInHour % spinIntervalSeconds;
		var topSpinTime = secondsModulo <= spinOffset;
		
		console.log("Background script: check time... (secondsModulo: " + secondsModulo + ")");
		
		if (topSpinTime) {
			console.log("Background script: open a new window...");
			
			var url = "dockerhub-cs:32779";
			//var url = "pc1935:8080/TOPspin/index.html";
			//var url = "http://www.nrc.nl/sectie/wetenschap/";
			
			if (firstTime)
				window.open(url, "TOPspin time!", "menubar,resizable,scrollbars,status");
			
			if (!productionMode)
				firstTime = false;
		}
	}
}
