 var swiper1 = new Swiper('.mySwiper', {
        loop: true,
        speed:1500,
        autoplay:{
            delay:3500,
            disableOnInteraction:false,
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true,
        },
      });

      
      var swiper2 = new Swiper('.mySwiper2', {
        watchSlidesProgress: true,
        slidesPerView: 3,
        spaceBetween: 25,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });

    