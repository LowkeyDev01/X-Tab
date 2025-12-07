//Declaring my variables
const homeSec = document.getElementById('home');
const loginSec = document.getElementById('login');
const loginBtn = document.getElementById('loginbtn')

function swap(currentPage, newPage){
    currentPage.style.display = 'none';
    newPage.style.display = 'flex'
}
loginBtn.addEventListener('click', ()=>{
    swap(homeSec, loginSec)
})