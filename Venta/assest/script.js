const toggler = document.querySelector('.menu__btn');
const navList = document.querySelector('.navbar__links');
const closeBtn = document.querySelector('.close__btn');
const header = document.querySelector('.header');
const section002 = document.querySelector('.customers');
const section003 = document.querySelector('.intro__section');
const allSections = document.querySelectorAll('.section');

toggler.addEventListener('click', () => {
    navList.style.display = 'flex';
    toggler.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    navList.style.display = 'none';
    toggler.style.display = 'block';
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 960) {
        navList.style.display = 'flex';
        toggler.style.display = 'none';
    } else {
        navList.style.display = 'none';
        toggler.style.display = 'block';
    }
});

header.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('navbar__link')) {
        const link = e.target;
        const navLink = link.closest('.header').querySelectorAll('.navbar__link');
        const logo = link.closest('.header').querySelector('img');
        navLink.forEach(function(e) {
            if (e !== link) {
                e.style.opacity = 0.5;
            }
        });

        logo.style.opacity = 0.3;
    }
});

header.addEventListener('mouseout', function(e) {
    if (e.target.classList.contains('navbar__link')) {
        console.log('true');
        const link = e.target;
        const navLink = link.closest('.header').querySelectorAll('.navbar__link');
        const logo = link.closest('.header').querySelector('img');
        navLink.forEach(function(e) {
            if (e !== link) {
                e.style.opacity = 1;
            }
        });

        logo.style.opacity = 1;
    }
});

const sticky = section002.getBoundingClientRect();
console.log(sticky);
window.addEventListener('scroll', () => {
    if (this.window.scrollY > sticky.top) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});
//revealSection

const revealSection = function(entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});

allSections.forEach(function(section) {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
});
//////////////////////////////////////////
//const sticky = section003.getBoundingClientRect();
// window.addEventListener('scroll', function() {
//     if (this.window.scrollY > sticky.top) {
//         header.classList.add('sticky');
//     } else {
//         header.classList.remove('sticky');
//     }
// });