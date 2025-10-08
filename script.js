//Declaration of variables

const newTime = document.getElementById('time');
const newDate = document.getElementById('date');
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
     'September', 'October', 'November', 'December'];
const main = document.getElementById('hii');
const loginSec = document.getElementById('login-section');

main.addEventListener('click', () =>{
    main.style.transition = 'opacity 0.6s';
    main.style.opacity = '0';
    setTimeout(()=>{
        main.style.display = 'none';
        loginSec.style.display = 'flex';
        loginSec.style.transition = 'opacity 1s';
        loginSec.style.opacity = '0';
        setTimeout(() =>{
            loginSec.style.opacity = '1';
        }, 50);
    }, 200);
});



//Check tis out!!
setInterval(timing, 1000);
function timing(){
    let d = new Date();
    const monthName = months[d.getMonth()]
    newTime.innerHTML = d.getHours() + ':' + d.getMinutes();
    newDate.innerHTML = d.getDate() + ',' + monthName + ' ' + d.getFullYear();
}
timing();