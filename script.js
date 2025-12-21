//Declaring my variables
const nav = document.getElementById('nav')
const topet = document.getElementById('top')

let lastScroll = 0
window.addEventListener('scroll', () => {
    currentScroll = window.scrollY

    if (currentScroll > lastScroll) {
        nav.style.bottom = '-80px'
    }
    else {
        nav.style.bottom = '0px'
    }
    lastScroll = currentScroll
})

function swap() {
    const navLinks = document.querySelectorAll('.w')
    const pages = document.querySelectorAll('.page')

    navLinks.forEach(btn => {
        btn.addEventListener('click', () => {
            targetId = btn.dataset.target;
            navLinks.forEach(b => b.classList.remove('q'))

            btn.classList.add('q')

            pages.forEach(p => p.style.display = 'none')
            document.getElementById(targetId).style.display = 'flex'
        })
    })
}
swap()

