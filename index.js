let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.header__navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// close popup on Esc click
document.addEventListener('keyup', function (event) {
    if (event.code === 'Escape') {
        navbar.classList.remove('active');
    }
})

// //close popup on overlay click
// document.addEventListener('click', function (e){
//     if (!e.target.closest('.navbar')) {
//         navbar.classList.remove('active');
//     }
// })
