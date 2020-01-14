var formElement = document.querySelector(".userInput form");
formElement.addEventListener("submit", function(event){
	event.preventDefault();

	var valueElement = document.querySelector(".userInput input[name=inputValue]");
	var value = valueElement.value;
	var rate = 1.11;
	var result = value * rate;

	var fromValueElement = document.querySelector(".result .fromValue");
	var toValueElement = document.querySelector(".result .toValue");

	fromValueElement.innerHTML = value + "€";
	toValueElement.innerHTML = result + "$";

});