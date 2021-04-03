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

	// 新品上线
	var newProductLaunchIndex = 0;
	$('#new-product-launch .list-item-swiperSlide').eq(0).addClass('list-item-swiperSlide_active');
    var listSwiper = new Swiper('#new-product-launchSwiper', {
        slidesPerView : 3,
        observer: true,
		observeParents:true,
		spaceBetween: 10,
        autoplayDisableOnInteraction: false,
        on: {
			slideChangeTransitionEnd() {
                newProductLaunchIndex = this.realIndex;
                var img_src =  $('#new-product-launch .list-item-swiperSlide').eq(newProductLaunchIndex).find('.list-item-swiperImg').attr('src');

                $('#new-product-launch .list-item-swiperSlide').removeClass('list-item-swiperSlide_active');
                $('#new-product-launch .list-item-swiperSlide').eq(newProductLaunchIndex).addClass('list-item-swiperSlide_active');
                $('#new-product-launch .list-item-img').attr('src', img_src);
            },

            click() {
                var img_src =  $('#new-product-launch .list-item-swiperSlide').eq(this.clickedIndex).find('.list-item-swiperImg').attr('src');

                $('#new-product-launch .list-item-swiperSlide').removeClass('list-item-swiperSlide_active');
                $('#new-product-launch .list-item-swiperSlide').eq(this.clickedIndex).addClass('list-item-swiperSlide_active');
                $('#new-product-launch .list-item-img').attr('src', img_src);
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
			paginationBulletMessage: 'Go to slide ' + (newProductLaunchIndex + 1),
			notificationClass: 'swiper-notification',
			containerMessage: 'This is a swiper',
			containerRoleDescriptionMessage: 'banner', //aria-role-description
			itemRoleDescriptionMessage: 'slider',
		}
    });

	// 经典菜系
	var classicCuisineIndex = 0;
	$('#classic-cuisine .list-item-swiperSlide').eq(0).addClass('list-item-swiperSlide_active');
    var listSwiper = new Swiper('#classic-cuisineSwiper', {
        slidesPerView : 3,
        observer: true,
		observeParents:true,
		spaceBetween: 10,
        autoplayDisableOnInteraction: false,
        on: {
			slideChangeTransitionEnd() {
                classicCuisineIndex = this.realIndex;
                var img_src =  $('#classic-cuisine .list-item-swiperSlide').eq(classicCuisineIndex).find('.list-item-swiperImg').attr('src');

                $('#classic-cuisine .list-item-swiperSlide').removeClass('list-item-swiperSlide_active');
                $('#classic-cuisine .list-item-swiperSlide').eq(classicCuisineIndex).addClass('list-item-swiperSlide_active');
                $('#classic-cuisine .list-item-img').attr('src', img_src);
            },

            click() {
                var img_src =  $('#classic-cuisine .list-item-swiperSlide').eq(this.clickedIndex).find('.list-item-swiperImg').attr('src');

                $('#classic-cuisine .list-item-swiperSlide').removeClass('list-item-swiperSlide_active');
                $('#classic-cuisine .list-item-swiperSlide').eq(this.clickedIndex).addClass('list-item-swiperSlide_active');
                $('#classic-cuisine .list-item-img').attr('src', img_src);
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
			paginationBulletMessage: 'Go to slide ' + (classicCuisineIndex + 1),
			notificationClass: 'swiper-notification',
			containerMessage: 'This is a swiper',
			containerRoleDescriptionMessage: 'banner', //aria-role-description
			itemRoleDescriptionMessage: 'slider',
		}
    });

	// 香辣菜系
	var spicyCuisineIndex = 0;
	$('#spicy-cuisine .list-item-swiperSlide').eq(0).addClass('list-item-swiperSlide_active');
    var listSwiper = new Swiper('#spicy-cuisineSwiper', {
        slidesPerView : 3,
        observer: true,
		observeParents:true,
		spaceBetween: 10,
        autoplayDisableOnInteraction: false,
        on: {
			slideChangeTransitionEnd() {
                spicyCuisineIndex = this.realIndex;
                var img_src =  $('#spicy-cuisine .list-item-swiperSlide').eq(spicyCuisineIndex).find('.list-item-swiperImg').attr('src');

                $('#spicy-cuisine .list-item-swiperSlide').removeClass('list-item-swiperSlide_active');
                $('#spicy-cuisine .list-item-swiperSlide').eq(spicyCuisineIndex).addClass('list-item-swiperSlide_active');
                $('#spicy-cuisine .list-item-img').attr('src', img_src);
            },

            click() {
                var img_src =  $('#spicy-cuisine .list-item-swiperSlide').eq(this.clickedIndex).find('.list-item-swiperImg').attr('src');

                $('#spicy-cuisine .list-item-swiperSlide').removeClass('list-item-swiperSlide_active');
                $('#spicy-cuisine .list-item-swiperSlide').eq(this.clickedIndex).addClass('list-item-swiperSlide_active');
                $('#spicy-cuisine .list-item-img').attr('src', img_src);
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
			paginationBulletMessage: 'Go to slide ' + (spicyCuisineIndex + 1),
			notificationClass: 'swiper-notification',
			containerMessage: 'This is a swiper',
			containerRoleDescriptionMessage: 'banner', //aria-role-description
			itemRoleDescriptionMessage: 'slider',
		}
    });

	// 清淡菜系
	var lightCuisineIndex = 0;
	$('#light-cuisine .list-item-swiperSlide').eq(0).addClass('list-item-swiperSlide_active');
    var listSwiper = new Swiper('#light-cuisineSwiper', {
        slidesPerView : 3,
        observer: true,
		observeParents:true,
		spaceBetween: 10,
        autoplayDisableOnInteraction: false,
        on: {
			slideChangeTransitionEnd() {
                lightCuisineIndex = this.realIndex;
                var img_src =  $('#light-cuisine .list-item-swiperSlide').eq(lightCuisineIndex).find('.list-item-swiperImg').attr('src');

                $('#light-cuisine .list-item-swiperSlide').removeClass('list-item-swiperSlide_active');
                $('#light-cuisine .list-item-swiperSlide').eq(lightCuisineIndex).addClass('list-item-swiperSlide_active');
                $('#light-cuisine .list-item-img').attr('src', img_src);
            },

            click() {
                var img_src =  $('#light-cuisine .list-item-swiperSlide').eq(this.clickedIndex).find('.list-item-swiperImg').attr('src');

                $('#light-cuisine .list-item-swiperSlide').removeClass('list-item-swiperSlide_active');
                $('#light-cuisine .list-item-swiperSlide').eq(this.clickedIndex).addClass('list-item-swiperSlide_active');
                $('#light-cuisine .list-item-img').attr('src', img_src);
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
			paginationBulletMessage: 'Go to slide ' + (lightCuisineIndex + 1),
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