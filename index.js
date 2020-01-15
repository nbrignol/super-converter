var allRates = {};

var rate = 0;
var currentCurrency = "JPY";
var currentSymbol = "y";

updateRateWebService();

var formElement = document.querySelector(".userInput form");
formElement.addEventListener("submit", function(event){
	event.preventDefault();
	processConvert();
});

var usdButton = document.querySelector(".currency-USD");
usdButton.addEventListener("click", function(){
	currentCurrency = "USD";
	currentSymbol = "$";
	rate = allRates[currentCurrency];

	processConvert();
});

var yenButton = document.querySelector(".currency-JPY");
yenButton.addEventListener("click", function(){
	currentCurrency = "JPY";
	currentSymbol = "y";
	rate = allRates[currentCurrency];

	processConvert();
});