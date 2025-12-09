//Declaring my variables
const homeSec = document.getElementById('home');
const loginSec = document.getElementById('login');
const signUpSec = document.getElementById('signup');
const main = document.getElementById('main');
const loginBtn = document.querySelector('#loginbtn')
const signupBtn = document.querySelector('#signupbtn')
const check = document.querySelector('#agree')

//swap function(to avoid repeating)
function swap(button, currentPage, newPage) {
    button.addEventListener('click', () => {
            currentPage.style.display = 'none';
            newPage.style.display = 'flex'
    })
}

//all the swaps needed
swap(loginBtn, homeSec, loginSec);
swap(signupBtn, homeSec, signUpSec);


//tiny Auth
const userName = document.getElementById('username')
const password = document.getElementById('password')
const err = document.getElementById('error')
const form = document.getElementById('center')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (userName.value == 'admin' && password.value == 'admin') {
            loginSec.style.display = 'none';
            main.style.display = 'flex'
            err.style.display = 'none'
            err.textContent = ''
    }
    else {
        err.style.display = 'block'
        err.textContent = 'try again'
    }
})