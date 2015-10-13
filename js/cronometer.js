var myVar = setInterval(function(){ myTimer() }, 1000);

function myTimer() {
    var d = new Date();
    var date = new Date(d.getYear(), d.getMonth(), 22 - d.getDate(), 23 - d.getHours(), 60 - d.getMinutes(), 60 - d.getSeconds(), 00);

    document.getElementById("day").textContent = '103' + date.getDate();
    document.getElementById("hour").textContent = '00';
    document.getElementById("minute").textContent = '00';
    document.getElementById("second").textContent = '00';
}
