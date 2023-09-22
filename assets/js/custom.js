var swiper = new Swiper(".editors-pick", {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});