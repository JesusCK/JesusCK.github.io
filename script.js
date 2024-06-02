let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
console.log(navLinks, navbar)


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        console.log(id)

        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                console.log(links)
                links.classList.remove('active');
                console.log(links)
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');
            })
        }

    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'block';
    }
}