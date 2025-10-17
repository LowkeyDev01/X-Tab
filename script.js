//Declaration of variables

const newTime = document.getElementById('time');
const newDate = document.getElementById('date');
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
     'September', 'October', 'November', 'December'];
const main = document.getElementById('hii');
const loginSec = document.getElementById('login-section');
const formSec = document.getElementById('form-section');
const msg = document.getElementById('message');
const userName = document.getElementById('username');
const movieSec = document.querySelector('.movie-section');
const addBtn = document.getElementById('add');
const uploadCard = document.querySelector('.upload-box')
const fileCover = document.getElementById('cover');
const uploadCover = document.getElementById('uploadcover')
const uploadMovie = document.getElementById('uploadmovie');
const movieBtn = document.getElementById('moviefile');
const filePath = document.getElementById('moviesrc');
const leaveBtn = document.getElementById('leave')




//Smooth animation effect for home page
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

//Authentication time!!
formSec.addEventListener('submit', (e) =>{
    e.preventDefault();
    const usernameValue = userName.value.trim();
    if (usernameValue == 'admin'){
        msg.textContent = 'Correct✅';
        loginSec.style.transition = 'opacity 1s';
        loginSec.style.opacity = '0';
        setTimeout(()=>{
            msg.textContent = '';
            loginSec.style.display = 'none';
            movieSec.style.display = 'flex';
            movieSec.style.transition = 'opacity 1s';
            movieSec.style.opacity = '0';
            setTimeout(()=>{
                movieSec.style.opacity = '1';
            }, 50)
        }, 400)
        
    }
    else{
        msg.textContent = 'holup';
        userName.value = '';
    }
})


//Check tis out!!
setInterval(timing, 1000);
function timing(){
    let d = new Date();
    const monthName = months[d.getMonth()]
    newTime.innerHTML = d.getHours() + ':' + d.getMinutes();
    newDate.innerHTML = d.getDate() + ',' + monthName + ' ' + d.getFullYear();
}
timing();

addBtn.addEventListener('click', () =>{
    if(uploadCard.style.display === 'none'){
        uploadCard.style.display = 'flex';
    }
    else{
        uploadCard.style.display = 'none';
    }
})

uploadCover.addEventListener('click', () =>{
    fileCover.click();
})

uploadMovie.addEventListener('click', () =>{
    movieBtn.click();
})

fileCover.addEventListener('change', () =>{
    const coverFile = fileCover.files[0];
    if (!coverFile) return;
    if (coverFile && coverFile.type.startsWith("image/")){
        const url = URL.createObjectURL(coverFile);
        uploadCover.src = url;
    }
    else{
        uploadCover.src = 'image-37-48.png';
    }
})

movieBtn.addEventListener('change', ()=>{
    const file = movieBtn.files[0];
    if(!file) return;
    if (file && file.type.startsWith("video/")){
        const url = URL.createObjectURL(file);
        filePath.textContent = url;
    }
    else{
        filePath.textContent = 'shishi no dey o';
    }
})
leaveBtn.addEventListener('click', ()=>{
    movieSec.style.transition = 'opacity 1s';
        movieSec.style.opacity = '0';
        userName.value = '';
        setTimeout(()=>{
            movieSec.style.display = 'none';
            loginSec.style.display = 'flex';
            loginSec.style.transition = 'opacity 1s';
            loginSec.style.opacity = '0';
            setTimeout(()=>{
                loginSec.style.opacity = '1';
            }, 50)
        }, 400)
})