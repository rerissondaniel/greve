var myVar = setInterval(function()
	{ 
		var dt = new Date();
		putDate();
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

function putDate() {
    document.getElementById("day").textContent = '103';
    document.getElementById("hour").textContent = '00';
    document.getElementById("minute").textContent = '00';
    document.getElementById("second").textContent = '00';
}
