var rate = 0;
var currentCurrency = "JPY";
var currentSymbol = "y";

updateRateWebService();

var formElement = document.querySelector(".userInput form");
formElement.addEventListener("submit", function(event){
	event.preventDefault();
	processConvert();
});
