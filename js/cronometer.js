var myVar = setInterval(function()
	{ 
		var dt = new Date();
		dt.setMonth(6);
		putDate(calcDateDiferences(new Date(2015, 5, 22, 0, 0, 0, 0), dt)) 
	}, 1000);

function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}

function calcDateDiferences(startDate, endDate){
	var ret = [0, 0, 0, 0];
	if(startDate.getMonth() < endDate.getMonth()){
		ret[0] = daysInMonth(startDate.getMonth(), startDate.getYear()) - startDate.getDate();
		for (var i = startDate.getMonth() + 1; i < endDate.getMonth(); i++) {
			ret[0] += daysInMonth(startDate.getYear(), i);
		};
		ret[0] += endDate.getDate();
	}else{
		ret[0] = endDate.getDate() - startDate.getDate();
	}

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
