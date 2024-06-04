document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('nav ul li a');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            navItems.forEach(navItem => navItem.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
});

/*
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('header nav');
    
    menuBtn.addEventListener('click', function () {
        nav.classList.toggle('show-menu');
    });
});
*/