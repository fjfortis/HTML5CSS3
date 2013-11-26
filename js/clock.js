$(document).ready(function(){
	function updateClock()
	{
		var currentTime = new Date();
	
		var currentHours = currentTime.getHours();
		var currentMinutes = currentTime.getMinutes();
	
		var currentDate = currentTime.getDate();
		var currentMonth = currentTime.getMonth();
		var currentYear = currentTime.getFullYear();
	
		// Añade un cero a los minutos y al mes si es recesario
		currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
		currentMonth = (currentMonth < 10 ? "0" : "") + currentMonth;
	
		// Actualiza la visualización de la hora
		$('#clock')[0].value = currentDate + "/" + currentMonth + "/" + currentYear + " - " + currentHours + ":" + currentMinutes;
	}
	
	setInterval(updateClock, 1000);
});