jQuery(document).ready(function ($) {

  var swiperArticle = new Swiper(".article-slider", {
    slidesPerView: "auto",
    spaceBetween: 20,
    pagination: {
      el: ".article-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".article-next",
      prevEl: ".article-prev",
    },
  });

  $('.article-slider .swiper-slide .text-wrap p').Cuttr({
    truncate: 'words',
    length: 22
  });

  /*mob menu*/
  $(document).on('click', '.open-menu a', function (e){
    e.preventDefault();
    if($('.open-menu').hasClass('is-active')){


      $('.open-menu').removeClass('is-active');
      $.fancybox.close();
      $('header').removeClass('is-active');
    } else{
      $('.open-menu').addClass('is-active');
      $('header').addClass('is-active');
      $.fancybox.open( $('#menu-responsive'), {
        touch:false,
        autoFocus:false,
        animationDuration : 600,
        animationEffect   : 'slide-in-out',
      });
    }
  });

  $(document).on('click', 'footer .item li h6', function (e) {
    e.preventDefault();
    let item = $(this).closest('.item'),
        itemLi = $(this).closest('.item').find('li');
    console.log(itemLi)
    item.toggleClass('is-open');
    if(item.hasClass('is-open')){
      itemLi.slideDown();
      console.log(1)
    }else{
      itemLi.slideUp()
      console.log(2)
    }
  });

  /* animation*/
  AOS.init({
    disable: 'mobile',
  });

});