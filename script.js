
// Initialize Swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Hamburger menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('ri-close-line');
    navbar.classList.toggle('active');
}

// Scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {

            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle button and navbar when click navbar links (scroll) 
    menuIcon.classList.remove('ri-close-line');
    navbar.classList.remove('active');
}

// ScrollReveal animations

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal(`.home-content`, { origin: 'top' })
sr.reveal(`.feature-box`, { origin: 'left', delay: 2000, interval: 600 })
sr.reveal(`.product-box`, { origin: 'left', interval: 1000 })
sr.reveal(`.about-left`, { origin: 'right' })
sr.reveal(`.about-right`, { origin: 'left', delay: 1200 })
sr.reveal(`.swiper`, { origin: 'top' })
sr.reveal(`.footer-box`, { origin: 'left', interval: 1000 })