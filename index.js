let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.header__navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}



















const openPopupButton = document.querySelector('.like-box__btn');
const closePopupBtn = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const likeBtn = document.querySelector('.like-box__btn')

function closePopup() {
    popup.classList.remove('popup_opened');
}

//open popup on like button click
openPopupButton.onclick = function () {
    popup.classList.add('popup_opened');
    likeBtn.classList.add('active')
}

// close popup on cross click
closePopupBtn.onclick = function () {
    closePopup();
}

// close popup on Esc click
document.addEventListener('keyup', function (event) {
    if (event.code === 'Escape') {
        closePopup();
    }
})

//close popup on overlay click
popup.addEventListener('click', function (e){
    if (!e.target.closest('.popup__container')) {
        closePopup();
    }
})

//swiper slider
let swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

// API request
let endpoint = `https://private-anon-9b88fdb048-grchhtml.apiary-mock.com/slides`;
let imageSrc = document.querySelector('.slide_img');

fetch(endpoint)
    .then(function (res) {
        return res.json();
    })
    .then(function (jsondata) {
        jsondata.data.reverse().forEach((e) => imageSrc.src = e.imgUrl);
        console.log(e.imgUrl);
    })
