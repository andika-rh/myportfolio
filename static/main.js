/*====== toggle icon navbar =====*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*====== scroll section active link =====*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*====== sticky navbar =====*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*====== remove toggle icon and navbar =====*/    
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*====== scroll reveal =====*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'buttom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home=contact p, .about-content', {origin: 'right'});

/*====== typed js =====*/

const typed = new Typed('.multiple-text',{
    strings: ['UI/UX Designer', 'Web Designer', 'Geographic Information System'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

/*====== contact js =====*/
const btn = document.getElementById('button');

document.getElementById('email-form').addEventListener
('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending ...';

    const serviceID = 'service_7da3kx6';
    const templateID = 'template_lcdritb';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email';
            alert('Email Berhasil Terkirim!');
        }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
        });
});

// function sendEmail() {
//     const bodyMassage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Massage: ${mess.value}`;

//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "dikarahmat336@gmail.com",
//         Password : "p087F014265CD069DCBE31235C396D870E07F",
//         To : 'dikarahmat336@gmail.com',
//         From : "dikarahmat336@gmail.com",
//         Subject : subject.value,
//         Body : bodyMassage
//     }).then(
//       message => alert(message)
//     );
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     sendEmail();
// });