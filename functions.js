function processConvert() {
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
}

function updateRateWebService() {
	console.log("updating rate...");

	var request = new XMLHttpRequest();
	request.open("GET", "https://api.exchangeratesapi.io/latest");

	request.addEventListener("load", function(event){
		
		var dataText = event.target.responseText;
		var data = JSON.parse(dataText);

		console.log(dataText);
		console.log(data.rates.USD);

		rate = data.rates.USD;

		var element = document.querySelector(".userInput");
		element.classList.remove("disabled");

		console.log("... done updating rate");
	});

	request.send();
}