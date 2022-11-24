function displayTime(){
    var date = new Date();
    var hrs = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var sess =document.getElementById('session');

    document.getElementById('hour').innerHTML = hrs;
    document.getElementById('min1').innerHTML = min;
    document.getElementById('sec1').innerHTML = sec;
}
setInterval(displayTime, 10);