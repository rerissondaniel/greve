var myVar = setInterval(function(){ myTimer() }, 1000);

function myTimer() {
    var d = new Date();
    var date = new Date(d.getYear(), d.getMonth(), 21 - d.getDate(), 23 - d.getHours(), 60 - d.getMinutes(), 60 - d.getSeconds(), 00);

    document.getElementById("day").textContent = date.getDate() == 0 ? '00' : '0' + date.getDate();
    document.getElementById("hour").textContent = date.getHours() >= 10 ? date.getHours() : '0' + date.getHours();
    document.getElementById("minute").textContent = date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes();
    document.getElementById("second").textContent = date.getSeconds() >= 10 ? date.getSeconds() : '0' + date.getSeconds();
}
