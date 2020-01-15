var rate = 0;

updateRateWebService();

var formElement = document.querySelector(".userInput form");
formElement.addEventListener("submit", function(event){
	event.preventDefault();
	processConvert();
});
