// ========================Typing Animation=============
var typed = new Typed('.typing', {
    strings: ["", "Web Designer", "Web Developer", "Front End Developer", "MERN Stack Developer"],
    typeSpeed: 100,
    BackSpeed: 80,
    loop: true
})

// ===================================Aside =============================
let nav = document.querySelector('.nav');
let navList = nav.querySelectorAll('li');
let totalNavList = navList.length;
let allSection = document.querySelectorAll('.section');
let totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {

    const a = navList[i].querySelector('a');

    a.addEventListener('click', function () {
        for (let j = 0; j < totalNavList; j++) {

            for (let i = 0; i < totalSection; i++) {
                allSection[i].classList.remove('back-section')
            }

            if (navList[j].querySelector('a').classList.contains('active')) {
                allSection[j].classList.add('back-section');
            }
            navList[j].querySelector('a').classList.remove('active');
        }
        this.classList.add('active');
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionToggler();
        }
    })
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('active')
    }
    const target = element.getAttribute('href').split('#')[1];
    document.querySelector("#" + target).classList.add('active')
}

const navTogglerBtn = document.querySelector('.nav-toggler');
let aside = document.querySelector('.aside');
navTogglerBtn.addEventListener('click', () => {
    asideSectionToggler();
});
function asideSectionToggler() {
    aside.classList.toggle('open')
    navTogglerBtn.classList.toggle('open');
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle('open');
    }
}