var swiper = new Swiper(".slide-content",{
    slidesPerView: 3,
    spaceBetween: 25,
    centeredSlides: true,
    fade: 'true',
    loop: true,
    grabCursor: 'true',
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,

    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  

breakpoints:{
    0: {
        slidesPerView:1,
    },
    520: {
        slidesPerView:2,
    },
    950: {
        slidesPerView:3,
    },
},
});