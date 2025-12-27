//Declaring my variables
const nav = document.getElementById('nav')
const topet = document.getElementById('top')

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

