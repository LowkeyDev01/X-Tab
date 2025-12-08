//Declaring my variables
const homeSec = document.getElementById('home');
const loginSec = document.getElementById('login');
const signUpSec = document.getElementById('signup');
const loginBtn = document.querySelector('#loginbtn')
const signupBtn = document.querySelector('#signupbtn')
const check = document.querySelector('#agree')

//swap function(to avoid repeating)
function swap(button, currentPage, newPage) {
    button.addEventListener('click', () => {
            currentPage.style.transition = '0.9s opacity'
            currentPage.style.opacity = 0
        setTimeout(() => {
            currentPage.style.display = 'none';
            newPage.style.display = 'flex'
        }, 900)
    })
}

//all the swaps needed
swap(loginBtn, homeSec, loginSec);
swap(signupBtn, homeSec, signUpSec);
