//Declaring my variables
const nav = document.getElementById('nav')
const topet = document.getElementById('top')

let lastScroll = 0
window.addEventListener('scroll', ()=>{
    currentScroll = window.scrollY

    if (currentScroll > lastScroll){
        nav.style.bottom = '-80px'
    }
    else{
        nav.style.bottom = '0px'
    }
    lastScroll = currentScroll
})