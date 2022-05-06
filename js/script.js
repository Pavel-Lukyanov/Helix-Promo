document.addEventListener("DOMContentLoaded", function() {
    const arrowMobile = document.getElementById('arrowMobile');
    const vidget = document.querySelector('.vidget-fixed');
    arrowMobile.addEventListener('click', () => {
        vidget.classList.toggle('active');
    });
});


/* const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
}); */