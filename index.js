var allRates = {};

var rate = 0;
var currentCurrency = "USD";
var currentSymbol = "$";

updateRateWebService();

var formElement = document.querySelector(".userInput form");
formElement.addEventListener("submit", function(event){
	event.preventDefault();
	processConvert();
});

function handleCurrencyChange (event){

	var previousSelectedElement = document.querySelector(".currency.selected");
	if (previousSelectedElement) {
		previousSelectedElement.classList.remove("selected");
	}

	event.target.classList.add("selected");


	var currency = event.target.getAttribute("data-currency");
	var symbol = event.target.getAttribute("data-symbol");


	changeCurrency(currency, symbol);
	processConvert();
}

var usdButton = document.querySelector(".currency-USD");
var yenButton = document.querySelector(".currency-JPY");
var phpButton = document.querySelector(".currency-PHP");

usdButton.addEventListener("click", handleCurrencyChange);
yenButton.addEventListener("click", handleCurrencyChange);
phpButton.addEventListener("click", handleCurrencyChange);
