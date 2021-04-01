(function(win, doc) {
	// banner
	var bannerIndex = 0;
	var banner = new Swiper('.banner', {
		autoplayDisableOnInteraction: false,
		autoplay: 5000,
		loop: true,
	    on: {
			slideChangeTransitionEnd() {
				bannerIndex = this.realIndex;
			}
		},
		a11y: {
			prevSlideMessage: 'Previous slide',
			nextSlideMessage: 'Next slide',
			firstSlideMessage: 'This is the first slide',
			lastSlideMessage: 'This is the last slide',
			paginationBulletMessage: 'Go to slide ' + (bannerIndex + 1),
			notificationClass: 'swiper-notification',
			containerMessage: 'This is a swiper',
			containerRoleDescriptionMessage: 'banner', //aria-role-description
			itemRoleDescriptionMessage: 'slider',
		}
	});

	var listSwiperIndex = 0;
    var listSwiper = new Swiper('.list-item-swiper', {
        slidesPerView : 3,
        observer: true,
		observeParents:true,
		spaceBetween: 10,
        autoplayDisableOnInteraction: false,
        on: {
			slideChangeTransitionEnd() {
                listSwiperIndex = this.realIndex;
                var img_src =  $('.list-item-swiperSlide').eq(listSwiperIndex).find('.list-item-swiperImg').attr('src');

                $('.list-item-swiperSlide').removeClass('list-item-swiperSlide_active');
                $('.list-item-swiperSlide').eq(listSwiperIndex).addClass('list-item-swiperSlide_active');
                $('.list-item-img').attr('src', img_src);
            },

            click() {
                var img_src =  $('.list-item-swiperSlide').eq(this.clickedIndex).find('.list-item-swiperImg').attr('src');

                $('.list-item-swiperSlide').removeClass('list-item-swiperSlide_active');
                $('.list-item-swiperSlide').eq(this.clickedIndex).addClass('list-item-swiperSlide_active');
                $('.list-item-img').attr('src', img_src);
            }
		},
		navigation: {
			nextEl: '.list-item-navigationNext',
			prevEl: '.list-item-navigationPrev',
		},
		a11y: {
			prevSlideMessage: 'Previous slide',
			nextSlideMessage: 'Next slide',
			firstSlideMessage: 'This is the first slide',
			lastSlideMessage: 'This is the last slide',
			paginationBulletMessage: 'Go to slide ' + (listSwiperIndex + 1),
			notificationClass: 'swiper-notification',
			containerMessage: 'This is a swiper',
			containerRoleDescriptionMessage: 'banner', //aria-role-description
			itemRoleDescriptionMessage: 'slider',
		}
    });
	
	$('.nav-item').on('click', function() {
		$('.nav-item').removeClass('nav-item_active');
		$(this).addClass('nav-item_active');
	});
})(window, document);