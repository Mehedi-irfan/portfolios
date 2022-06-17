// =====================Toggole Style Switcher====================
const styleToggleSwitcher = document.querySelector('.style-switcher-toggler');
styleToggleSwitcher.addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
})

// ============hide style - switcher when scroll=============
window.addEventListener('scroll', () => {
    if (document.querySelector('.style-switcher').classList.contains('open')) {
        document.querySelector('.style-switcher').classList.remove('open')
    }
})

// ===============================Theme color =======================
const altranateStyle = document.querySelectorAll('.alternate-style');
function setActiveStyle(color) {
    altranateStyle.forEach((style) => {
        if (color === style.getAttribute('title')) {
            style.removeAttribute('disabled')
        }
        else {
            style.setAttribute('disabled', 'ture')
        }
    })
}


// =====================Theme light dark and moon ================
const DayLigth = document.querySelector('.day-night');
DayLigth.addEventListener('click', () => {
    DayLigth.querySelector('i').classList.toggle('fa-sun');
    DayLigth.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
})
window.addEventListener('load', () => {
    if (document.body.classList.contains('dark')) {
        DayLigth.querySelector('i').classList.add('fa-sun');
    }
    else {
        DayLigth.querySelector('i').classList.add('fa-moon');
    }
})