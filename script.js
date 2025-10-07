//Declaration of variables

const newTime = document.getElementById('time');
const newDate = document.getElementById('date');
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
     'September', 'October', 'November', 'December'];

//Check tis out!!
setInterval(timing, 1000)
function timing(){
    let d = new Date();
    const monthName = months[d.getMonth()]
    newTime.innerHTML = d.getHours() + ':' + d.getMinutes();
    newDate.innerHTML = d.getDate() + ',' + monthName + ' ' + d.getFullYear();
}
timing();