var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    //左右图标按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    spaceBetween: 30,
    centeredSlides: true,
    //设置时间
    autoplay: 3000,
    autoplayDisableOnInteraction: false,
    loop : true,
});