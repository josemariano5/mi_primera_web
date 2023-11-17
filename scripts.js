document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.querySelector('.menu-icon');
    var nav = document.querySelector('nav ul');

    menuIcon.addEventListener('click', function () {
        nav.classList.toggle('show');
    });
});


//alert("Hola este es mi Javascript");
