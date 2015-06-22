var myVar = setInterval(function(){ putDate(calcDateDiferences(new Date(2015, 5, 22, 0, 0, 0, 0), new Date())) }, 1000);

function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}

function calcDateDiferences(startDate, endDate){
	var ret = [0, 0, 0, 0];
	
	

	ret[1] = endDate.getHours();
	ret[2] = endDate.getMinutes();
	ret[3] = endDate.getSeconds();

	return ret;
}

function putDate(date) {
    document.getElementById("day").textContent = date[0] >= 10 ? date[0] : '0' + date[0];
    document.getElementById("hour").textContent = date[1] >= 10 ? date[1] : '0' + date[1];
    document.getElementById("minute").textContent = date[2] >= 10 ? date[2] : '0' + date[2];
    document.getElementById("second").textContent = date[3] >= 10 ? date[3] : '0' + date[3];
}
