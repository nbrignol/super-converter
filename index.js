var rate = 0;

console.log("DEBUT");

var request = new XMLHttpRequest();
request.open("GET", "https://api.exchangeratesapi.io/latest");

request.addEventListener("load", function(event){
	console.log("LOAD !");

	var dataText = event.target.responseText;
	var data = JSON.parse(dataText);

	console.log(dataText);
	console.log(data.rates.USD);

	rate = data.rates.USD;

	var element = document.querySelector(".userInput");
	element.classList.remove("disabled");

});

request.send();


console.log("APRES LE SEND");

var formElement = document.querySelector(".userInput form");
formElement.addEventListener("submit", function(event){
	event.preventDefault();

	var valueElement = document.querySelector(".userInput input[name=inputValue]");
	var value = valueElement.value;

	if (!value) {
		value = 1;
	}

	var result = value * rate;

	var fromValueElement = document.querySelector(".result .fromValue");
	var toValueElement = document.querySelector(".result .toValue");

	fromValueElement.innerHTML = value + "€";
	toValueElement.innerHTML = result + "$";

});

console.log("FIN");
