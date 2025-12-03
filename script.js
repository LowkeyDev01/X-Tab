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
const uploadBtn = document.getElementById('finally');
const title = document.getElementById('movietitle')
const video = document.getElementById('video')
const overlay = document.querySelector('.overlay')


//Smooth animation effect for home page
main.addEventListener('click', () => {
    main.style.transition = 'opacity 0.6s';
    main.style.opacity = '0';
    setTimeout(() => {
        main.style.display = 'none';
        loginSec.style.display = 'flex';
        loginSec.style.transition = 'opacity 1s';
        loginSec.style.opacity = '0';
        setTimeout(() => {
            loginSec.style.opacity = '1';
        }, 50);
    }, 200);
});

//Authentication time!!
formSec.addEventListener('submit', (e) => {
    e.preventDefault();
    const usernameValue = userName.value.trim();
    if (usernameValue == 'admin') {
        msg.textContent = '';
        loginSec.style.transition = 'opacity 1s';
        loginSec.style.opacity = '0';
        setTimeout(() => {
            msg.textContent = '';
            loginSec.style.display = 'none';
            movieSec.style.display = 'flex';
            movieSec.style.transition = 'opacity 1s';
            movieSec.style.opacity = '0';
            setTimeout(() => {
                movieSec.style.opacity = '1';
                userName.value = '';
            }, 50)
        }, 400)
    }
    else {
        msg.textContent = 'holup';
        userName.value = '';
    }
})


//Check tis out!!
setInterval(timing, 1000);
function timing() {
    let d = new Date();
    const monthName = months[d.getMonth()]
    newTime.innerHTML = d.getHours() + ':' + d.getMinutes();
    newDate.innerHTML = d.getDate() + ',' + monthName + ' ' + d.getFullYear();
}
timing();

addBtn.addEventListener('click', () => {
    overlay.style.display = 'block';
    uploadCard.style.display = 'flex';
});

overlay.addEventListener('click', () => {
    uploadCard.style.display = 'none';
    overlay.style.display = 'none';
    title.value = ''
    uploadCover.src = 'image-37-48.png';
    filePath.textContent = '';
})

uploadCover.addEventListener('click', () => {
    fileCover.click();
})

uploadMovie.addEventListener('click', () => {
    movieBtn.click();
})

let coverFile;
let coverUrl;
let file;
let url;


fileCover.addEventListener('change', () => {
    coverFile = fileCover.files[0];
    if (!coverFile) return;
    if (coverFile && coverFile.type.startsWith("image/")) {
        coverUrl = URL.createObjectURL(coverFile);
        uploadCover.src = coverUrl;
    }
    else {
        uploadCover.src = 'image-37-48.png';
    }
})

movieBtn.addEventListener('change', () => {
    file = movieBtn.files[0];
    if (!file) return;
    if (file && file.type.startsWith("video/")) {
        url = URL.createObjectURL(file);
        filePath.textContent = url;
    }
    else {
        filePath.textContent = 'shishi no dey o';
    }
})

let playImg = null;
let downloadImg = null;

uploadBtn.addEventListener('click', () => {
    if (!file || !coverFile || title.value.trim() === '') {
        return;
    }
    else {
        const dair = document.createElement('div');
        dair.classList.add('movie-box');
        dair.style.backgroundImage = `url(${coverUrl})`

        const cads = document.createElement('p')
        cads.id = 'maybe';
        cads.textContent = title.value;

        const details = document.createElement('div')
        details.classList.add('details');

        playImg = document.createElement('img');
        playImg.id = 'play-size';
        playImg.src = 'play-332-64.png';
        playImg.dataset.url = url;

        downloadImg = document.createElement('img');
        downloadImg.id = 'download-size';
        downloadImg.src = 'download-379-64.png';
        downloadImg.dataset.url = url;

        const action = document.createElement('div');
        action.className = 'action';

        // attach handlers to the created elements so they exist when listeners run
        playImg.addEventListener('click', () => {
            video.src = playImg.dataset.url;
            video.play();
        });

        downloadImg.addEventListener('click', () => {
            const a = document.createElement('a');
            a.href = downloadImg.dataset.url;
            a.download = `${title.value || 'download'}.mp4`;
            document.body.appendChild(a);
            a.click();
            a.remove();
        });

        action.appendChild(playImg);
        action.appendChild(downloadImg);
        details.appendChild(cads);
        details.appendChild(action);
        dair.appendChild(details);
        document.querySelector('.movies').appendChild(dair);

        title.value = '';
        uploadCover.src = 'image-37-48.png';
        filePath.textContent = '';
        uploadCard.style.display = 'none';
        overlay.style.display = 'none'
    }
})





leaveBtn.addEventListener('click', () => {
    movieSec.style.transition = 'opacity 1s';
    movieSec.style.opacity = '0';
    setTimeout(() => {
        movieSec.style.display = 'none';
        loginSec.style.display = 'flex';
        loginSec.style.transition = 'opacity 1s';
        loginSec.style.opacity = '0';
        setTimeout(() => {
            loginSec.style.opacity = '1';
        }, 50)
    }, 400)
})