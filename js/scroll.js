const links = document.querySelectorAll('.menu-list__link');
const btn = document.querySelector('.main__button');
const scroll = document.querySelector('.main__scroll');
const logo = document.querySelector('.logo');

const allLinks = [...links, btn, scroll, logo];

allLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const id = link.getAttribute('href').substring(1);
        const section = document.getElementById(id);

        if (section) {
            seamless.scrollIntoView(section, {
                behavior: "smooth",
                block: "start",
                inline: "start",
            });
        }
    })
});